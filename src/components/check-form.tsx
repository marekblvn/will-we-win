import { useMemo } from "react";
import type { Check } from "../types";
import CheckField from "./check-field";
import { Button, Flex, Form } from "antd";
import { useForm } from "antd/es/form/Form";

interface CheckFormProps {
  readonly onSubmit: (values: Record<string, boolean>) => void;
  readonly checks: Array<Check>;
}

export default function CheckForm({ onSubmit, checks }: CheckFormProps) {
  const [form] = useForm();

  const formFields = useMemo(() => {
    return checks.map((ch) => {
      return <CheckField key={ch.key} text={ch.text} name={ch.key} />;
    });
  }, [checks]);

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={onSubmit}
      initialValues={{}}
    >
      {formFields}
      <Flex justify="center" style={{ marginTop: "32px" }}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Vyhrajeme?
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
}
