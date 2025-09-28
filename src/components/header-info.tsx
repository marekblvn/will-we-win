import { Typography } from "antd";

export default function HeaderInfo() {
  return (
    <>
      <Typography.Title level={2} color="#F9F9F9">
        Vyhrajeme?
      </Typography.Title>
      <Typography.Paragraph italic>
        Toto je kalkulačka pro výpočet pravděpodobnosti výhry v následující hře.
        Prosím, zvolte platná tvrzení:
      </Typography.Paragraph>
    </>
  );
}
