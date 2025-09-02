
import { useState, useEffect } from 'react';
import {
  Card,
  Form,
  InputNumber,
  Button,
  DatePicker,
  List,
  Typography,
  Row,
  Col,
  message,
} from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';

const { Title } = Typography;

interface BodyCompositionData {
  date: string;
  weight: number;
  muscle: number;
  fat: number;
}

const BodyComposition = () => {
  const [data, setData] = useState<BodyCompositionData[]>([]);
  const [form] = Form.useForm();

  const getLocalStorageKey = () => 'body-composition-data';

  useEffect(() => {
    const savedData = localStorage.getItem(getLocalStorageKey());
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(getLocalStorageKey(), JSON.stringify(data));
  }, [data]);

  const onFinish = (values: any) => {
    const newDataPoint: BodyCompositionData = {
      date: values.date.format('YYYY-MM-DD'),
      weight: values.weight,
      muscle: values.muscle,
      fat: values.fat,
    };

    // Avoid duplicate entries for the same date
    if (data.some(d => d.date === newDataPoint.date)) {
        message.error('An entry for this date already exists.');
        return;
    }

    const updatedData = [...data, newDataPoint].sort((a, b) =>
      dayjs(a.date).diff(dayjs(b.date))
    );
    setData(updatedData);
    form.resetFields();
    message.success('New data point added successfully!');
  };

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={8}>
        <Card>
          <Title level={4}>Add New Data</Title>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: 'Please select a date!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="weight"
              label="Weight (kg)"
              rules={[{ required: true, message: 'Please input your weight!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="muscle"
              label="Muscle (kg)"
              rules={[{ required: true, message: 'Please input your muscle mass!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="fat"
              label="Fat (%)"
              rules={[{ required: true, message: 'Please input your body fat percentage!' }]}
            >
              <InputNumber min={0} max={100} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add Data
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} lg={16}>
        <Card>
          <Title level={4}>Body Composition Trends</Title>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
              <Line type="monotone" dataKey="muscle" stroke="#82ca9d" />
              <Line type="monotone" dataKey="fat" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>
      <Col xs={24}>
        <Card>
            <Title level={4}>Data History</Title>
            <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text>
                            {item.date}: Weight: {item.weight}kg, Muscle: {item.muscle}kg, Fat: {item.fat}%
                        </Typography.Text>
                    </List.Item>
                )}
            />
        </Card>
      </Col>
    </Row>
  );
};

export default BodyComposition;
