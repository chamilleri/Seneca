import { Question } from "./Question";
import quiz from "./quiz.json";
import "./style.scss";

export const Quiz = () => {
  return quiz.map((q, i) => <Question key={"question" + i} question={q} />);
};
