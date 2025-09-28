import { useCallback, useEffect, useState } from "react";
import CheckForm from "./components/check-form";
import type { Check } from "./types";
import ScoreDisplay from "./components/score-display";
import { Layout } from "antd";
import HeaderInfo from "./components/header-info";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FooterInfo from "./components/footer-info";

function App() {
  const [checks, setChecks] = useState<Array<Check>>([]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}checks.json`)
      .then((res) => res.json())
      .then((data) => setChecks(data));
  }, []);

  const handleSubmitForm = useCallback(
    (values: Record<string, boolean>) => {
      let total = 0;
      checks.forEach((q) => {
        if (values[q.key]) {
          total += q.value;
        }
      });
      setScore(total);
    },
    [checks]
  );
  return (
    <Layout>
      <Header>
        <HeaderInfo />
      </Header>
      <Content>
        <CheckForm onSubmit={handleSubmitForm} checks={checks} />
        <ScoreDisplay score={score} />
      </Content>
      <Footer>
        <FooterInfo />
      </Footer>
    </Layout>
  );
}

export default App;
