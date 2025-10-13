import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const today = new Date(2024, 9, 22);
const overdueTodos: Todo[] = initTodos.filter((todo) => {
  return !todo.isDone && todo.deadline < today;
});
console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overdueTodos, null, 2));
