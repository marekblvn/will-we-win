import { Typography } from "antd";

export default function Header() {
  return (
    <div style={{ marginLeft: "30px" }}>
      <Typography.Title level={2}>Vyhrajeme?</Typography.Title>
      <Typography.Paragraph italic>Zvolte platná tvrzení:</Typography.Paragraph>
    </div>
  );
}
