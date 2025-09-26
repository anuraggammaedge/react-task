import { useTrelloBoard } from "../zustandStore.js";
import { TrelloColumn } from "./TrelloColumn";
import { AddTask } from "./AddTask.jsx";

export const TrelloBoard = () => {
  const tasks = useTrelloBoard((state) => state.tasks);
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <section className="m-5">
      <AddTask />
      <div className="flex flex-row flex-wrap md:flex-nowrap bg-gray-200 p-6 gap-2  justify-between rounded-xl">
        {columns.map((col, i) => {
          return (
            <TrelloColumn
              key={i}
              title={col}
              tasks={tasks?.filter((task) => task.status === col)}
              message={"Nothing left over !"}
            />
          );
        })}
      </div>
    </section>
  );
};
