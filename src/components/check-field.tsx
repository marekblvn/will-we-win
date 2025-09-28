import { Col, Form, Row, Switch, Typography } from "antd";

interface CheckFieldProps {
  readonly text: string;
  readonly name: string;
}

export default function CheckField({ text, name }: CheckFieldProps) {
  return (
    <Row style={{ marginLeft: "32px" }}>
      <Col flex={"auto"}>
        <Typography>{text}</Typography>
      </Col>
      <Col flex={"100px"}>
        <Form.Item name={name} valuePropName="checked">
          <Switch
            className="custom-switch"
            checkedChildren={"Ano"}
            unCheckedChildren={"Ne"}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}
