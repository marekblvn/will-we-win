import { Flex, Typography } from "antd";

interface ScoreDisplayProps {
  readonly score: number | null;
}

export default function ScoreDisplay({ score }: ScoreDisplayProps) {
  const determineResult = () => {
    if (score === null) return "?";
    if (score <= -20) {
      return "Ani náhodou";
    } else if (score > -20 && score <= 0) {
      return "Nejspíš ne";
    } else if (score > 0 && score <= 20) {
      return "Eeeeh... možná";
    } else {
      return "Snad..";
    }
  };
  return (
    <Flex
      vertical
      align={"center"}
      justify="center"
      style={{ marginBottom: "24px" }}
    >
      <div>
        <Typography.Title level={5}>{determineResult()}</Typography.Title>
      </div>
    </Flex>
  );
}
