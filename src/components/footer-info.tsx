import { GithubOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

export default function FooterInfo() {
  return (
    <Flex justify="center" align="center" gap={"small"}>
      <Typography.Text>&copy; Marek Balvín, 2025</Typography.Text>
      <Button
        type="text"
        shape="circle"
        icon={<GithubOutlined />}
        href="https://github.com/marekblvn"
        target="_blank"
      />
    </Flex>
  );
}
