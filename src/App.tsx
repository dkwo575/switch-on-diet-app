import { useState, useEffect } from "react";
import { dietPlan } from "./diet-plan";
import {
  Layout,
  Card,
  Button,
  DatePicker,
  Checkbox,
  List,
  Row,
  Col,
  Typography,
  Space,
  message,
  ConfigProvider,
  Divider,
  Popconfirm,
} from "antd";
import { LeftOutlined, RightOutlined, ClearOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import dayjs from "dayjs";
import "./App.css";
import theme from "./theme.ts";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// const theme = {
//   token: {
//     colorPrimary: "#1890ff", // A light blue
//   },
// };

function App() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [now, setNow] = useState(dayjs());
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Helper to generate a unique key for localStorage based on the current date
  const getLocalStorageKey = (date: dayjs.Dayjs) =>
    `diet-checklist-${date.format("YYYY-MM-DD")}`;

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Load checked items from localStorage when currentDate changes
    const savedCheckedItems = localStorage.getItem(
      getLocalStorageKey(currentDate)
    );
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems));
    } else {
      setCheckedItems({}); // Clear if no saved items for this day
    }
  }, [currentDate]);

  useEffect(() => {
    // Save checked items to localStorage whenever checkedItems state changes
    localStorage.setItem(
      getLocalStorageKey(currentDate),
      JSON.stringify(checkedItems)
    );
  }, [checkedItems, currentDate]);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setStartDate(date);
      setCurrentDate(date);
      message.success(`Diet start date set to ${date.format("YYYY-MM-DD")}`);
    } else {
      setStartDate(null);
    }
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const item = e.target.name as string;
    setCheckedItems((prev) => ({ ...prev, [item]: e.target.checked }));
  };

  const goToPreviousDay = () => {
    setCurrentDate(currentDate.subtract(1, "day"));
  };

  const goToNextDay = () => {
    setCurrentDate(currentDate.add(1, "day"));
  };

  const handleResetData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("diet-checklist-")) {
        localStorage.removeItem(key);
      }
    }
    setStartDate(null);
    setCurrentDate(dayjs());
    setCheckedItems({});
    message.success("All diet data has been reset!");
  };

  const renderDietPlan = () => {
    if (!startDate) {
      return (
        <Text
          type="secondary"
          style={{ textAlign: "center", display: "block", marginTop: 24 }}
        >
          Please select a start date for your diet plan.
        </Text>
      );
    }

    const dayOfDiet = currentDate.diff(startDate, "day") + 1;
    const week = Math.ceil(dayOfDiet / 7);
    const dayOfWeek = dayOfDiet > 0 ? ((dayOfDiet - 1) % 7) + 1 : 1;

    if (week < 1 || week > dietPlan.length) {
      return (
        <Text
          type="danger"
          style={{ textAlign: "center", display: "block", marginTop: 24 }}
        >
          No diet plan available for this date.
        </Text>
      );
    }

    const weeklyPlan = dietPlan[week - 1];
    const dailyPlan = weeklyPlan?.dailyPlans.find((p) => p.day === dayOfWeek);

    if (!dailyPlan) {
      return (
        <Text
          type="danger"
          style={{ textAlign: "center", display: "block", marginTop: 24 }}
        >
          No diet plan available for this day.
        </Text>
      );
    }

    return (
      <Card
        title={`Week ${week}, Day ${dayOfWeek} (${currentDate.format(
          "YYYY-MM-DD"
        )})`}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Title level={4}>Daily Checklist</Title>
            <List
              bordered
              dataSource={weeklyPlan.checklist}
              renderItem={(item, index) => (
                <List.Item>
                  <Checkbox
                    name={`checklist-${index}`}
                    checked={!!checkedItems[`checklist-${index}`]}
                    onChange={handleCheckboxChange}
                  >
                    {item}
                  </Checkbox>
                </List.Item>
              )}
              style={{ maxHeight: 250, overflowY: "auto" }}
            />
          </Col>
          <Col xs={24} lg={12}>
            <Title level={4}>Allowed Foods for this Week</Title>
            <List
              bordered
              dataSource={weeklyPlan.allowedFoods}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ maxHeight: 250, overflowY: "auto" }}
            />
          </Col>
        </Row>
        <Divider />
        <Title level={4}>Meal Plan</Title>
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Card type="inner" title="Breakfast" className="card-content">
              <Checkbox
                name="breakfast"
                checked={!!checkedItems["breakfast"]}
                onChange={handleCheckboxChange}
              >
                {dailyPlan.mealPlan.breakfast}
              </Checkbox>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card type="inner" title="Lunch">
              <Checkbox
                name="lunch"
                checked={!!checkedItems["lunch"]}
                onChange={handleCheckboxChange}
              >
                {dailyPlan.mealPlan.lunch}
              </Checkbox>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card type="inner" title="Dinner">
              <Checkbox
                name="dinner"
                checked={!!checkedItems["dinner"]}
                onChange={handleCheckboxChange}
              >
                {dailyPlan.mealPlan.dinner}
              </Checkbox>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  };

  return (
    <ConfigProvider>
      <Layout
        style={{ minHeight: "100vh", backgroundColor: theme.palette.pumpkin2 }}
      >
        <Header
          style={{
            backgroundColor: theme.palette.pumpkin1,
            borderBottom: "1px solid #f0f0f0",
            padding: "0 24px",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#b34700",
              margin: "16px 0",
              textAlign: "center",
            }}
          >
            Switch On Diet
          </Title>
        </Header>
        <Content
          className="content"
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          <Card style={{ marginBottom: 24, overflow: "visible" }}>
            <Row
              gutter={[8, 8]}
              justify="space-between"
              align="middle"
              wrap={true}
            >
              <Col
                xs={24}
                sm={8}
                style={{ border: "1px dashed red", textAlign: "center" }}
              >
                <Button
                  icon={<LeftOutlined />}
                  onClick={goToPreviousDay}
                  disabled={!startDate}
                  block
                  className="mobile-full-width"
                >
                  Previous Day
                </Button>
              </Col>
              <Col
                xs={24}
                sm={8}
                style={{ border: "1px dashed red", textAlign: "center" }}
              >
                <Space
                  direction="vertical"
                  align="center"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={4}
                    className="clock-title"
                    style={{ margin: 0 }}
                  >
                    {now.format("HH:mm:ss")}
                  </Title>
                  <DatePicker
                    className="mobile-full-width"
                    onChange={handleDateChange}
                    style={{ width: "100%" }}
                  />
                  <Popconfirm
                    title="Are you sure to reset all diet data?"
                    onConfirm={handleResetData}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type="primary"
                      danger
                      icon={<ClearOutlined />}
                      block
                      className="mobile-full-width"
                    >
                      Reset All Data
                    </Button>
                  </Popconfirm>
                </Space>
              </Col>
              <Col
                xs={24}
                sm={8}
                style={{ border: "1px dashed red", textAlign: "center" }}
              >
                <Button
                  icon={<RightOutlined />}
                  onClick={goToNextDay}
                  disabled={!startDate}
                  block
                  className="mobile-full-width"
                >
                  Next Day
                </Button>
              </Col>
            </Row>
          </Card>
          {renderDietPlan()}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: theme.palette.primary3,
          }}
        >
          SwitchOnDiet ©{new Date().getFullYear()} Created with Ant Design
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
