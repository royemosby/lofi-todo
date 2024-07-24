import Dexie from "dexie";

export const db = new Dexie("lofiTodo");
db.version(1).stores({
  todos: "++id, title, isCompleted, dateCreated",
});
