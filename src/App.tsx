import { useCallback, useEffect, useState } from "react";
import CheckForm from "./components/check-form";
import Header from "./components/header";
import type { Check } from "./types";
import ScoreDisplay from "./components/score-display";

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
    <div>
      <Header />
      <CheckForm onSubmit={handleSubmitForm} checks={checks} />
      <ScoreDisplay score={score} />
    </div>
  );
}

export default App;
