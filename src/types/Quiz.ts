type Option = string;
type Answer = { id: string; correct: string; options: Option[] };
type Question = { title: string; answers: Answer[] };
type Quiz = Question[];
