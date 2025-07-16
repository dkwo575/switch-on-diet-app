import { useState, useEffect } from 'react';
import { dietPlan } from './diet-plan';
import { Layout, Card, Button, DatePicker, Checkbox, List, Row, Col, Typography, Space, message } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import dayjs from 'dayjs';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [now, setNow] = useState(dayjs());
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCheckedItems({});
  }, [currentDate]);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setStartDate(date);
      setCurrentDate(date);
      message.success(`Diet start date set to ${date.format('YYYY-MM-DD')}`);
    } else {
      setStartDate(null);
    }
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const item = e.target.name as string;
    setCheckedItems(prev => ({ ...prev, [item]: e.target.checked }));
  };

  const goToPreviousDay = () => {
    setCurrentDate(currentDate.subtract(1, 'day'));
  };

  const goToNextDay = () => {
    setCurrentDate(currentDate.add(1, 'day'));
  };

  const renderDietPlan = () => {
    if (!startDate) {
      return <Text type="secondary" style={{ textAlign: 'center', display: 'block' }}>Please select a start date for your diet plan.</Text>;
    }

    const dayOfDiet = currentDate.diff(startDate, 'day') + 1;
    const week = Math.ceil(dayOfDiet / 7);
    const dayOfWeek = dayOfDiet > 0 ? ((dayOfDiet - 1) % 7) + 1 : 1;

    if (week < 1 || week > dietPlan.length) {
      return <Text type="danger" style={{ textAlign: 'center', display: 'block' }}>No diet plan available for this date.</Text>;
    }

    const weeklyPlan = dietPlan[week - 1];
    const dailyPlan = weeklyPlan?.dailyPlans.find(p => p.day === dayOfWeek);

    if (!dailyPlan) {
      return <Text type="danger" style={{ textAlign: 'center', display: 'block' }}>No diet plan available for this day.</Text>;
    }

    return (
      <Card title={`Week ${week}, Day ${dayOfWeek} (${currentDate.format('YYYY-MM-DD')})`}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="Daily Checklist">
              <List
                dataSource={weeklyPlan.checklist}
                renderItem={(item, index) => (
                  <List.Item>
                    <Checkbox name={`checklist-${index}`} checked={!!checkedItems[`checklist-${index}`]} onChange={handleCheckboxChange}>
                      {item}
                    </Checkbox>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Allowed Foods for this Week">
              <List
                dataSource={weeklyPlan.allowedFoods}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        </Row>
        <Card title="Meal Plan" style={{ marginTop: 16 }}>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Card type="inner" title="Breakfast">
                <Checkbox name="breakfast" checked={!!checkedItems['breakfast']} onChange={handleCheckboxChange}>
                  {dailyPlan.mealPlan.breakfast}
                </Checkbox>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card type="inner" title="Lunch">
                <Checkbox name="lunch" checked={!!checkedItems['lunch']} onChange={handleCheckboxChange}>
                  {dailyPlan.mealPlan.lunch}
                </Checkbox>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card type="inner" title="Dinner">
                <Checkbox name="dinner" checked={!!checkedItems['dinner']} onChange={handleCheckboxChange}>
                  {dailyPlan.mealPlan.dinner}
                </Checkbox>
              </Card>
            </Col>
          </Row>
        </Card>
      </Card>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'inherit', margin: '16px 0' }}>Switch On Diet</Title>
      </Header>
      <Content style={{ padding: '24px 50px' }}>
        <Card>
          <Row justify="space-between" align="middle">
            <Col>
              <Button icon={<LeftOutlined />} onClick={goToPreviousDay} disabled={!startDate}>Previous Day</Button>
            </Col>
            <Col>
              <Space direction="vertical" align="center">
                <Title level={4}>{now.format('HH:mm:ss')}</Title>
                <DatePicker onChange={handleDateChange} />
              </Space>
            </Col>
            <Col>
              <Button icon={<RightOutlined />} onClick={goToNextDay} disabled={!startDate}>Next Day</Button>
            </Col>
          </Row>
        </Card>
        <div style={{ marginTop: 24 }}>
          {renderDietPlan()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        SwitchOnDiet ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
}

export default App;
