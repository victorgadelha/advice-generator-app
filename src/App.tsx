import { useEffect, useState } from "react";
import Card from "./components/Card";

type AdviceResponse = {
  slip: {
    id: number;
    advice: string;
  };
};

const App = () => {
  const [adviceText, setAdviceText] = useState<string>("");
  const [adviceNumber, setAdviceNumber] = useState<number>(0);
  const fetchAdvice = async () => {
    try {
      const response: Response = await fetch(
        "https://api.adviceslip.com/advice"
      );
      const data: AdviceResponse = await response.json();
      console.log(data);
      setAdviceText(data.slip.advice);
      setAdviceNumber(data.slip.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full bg-dark-blue p-8">
      <Card
        adviceNumber={adviceNumber}
        adviceText={adviceText}
        fetchAdvice={fetchAdvice}
      />
    </div>
  );
};

export default App;
