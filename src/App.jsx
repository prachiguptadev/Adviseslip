import "./styles.css";
import { useEffect ,useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((response)=>response.json()).then((data)=>setAdvice(data.slip.advice))
  },[])
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    console.log(data);
  };
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice} type="submit">
        Get Advice
      </button>
    </div>
  );
}
