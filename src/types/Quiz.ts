export type Option = string;
export type Answer = { id: string; correct: string; options: Option[] };
export type Question = { title: string; answers: Answer[] };
export type Quiz = Question[];
