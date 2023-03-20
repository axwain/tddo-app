export type Todo = {
  description: string;
  isCompleted: boolean;
};

export type TodoCallback = (value: Todo) => void;
