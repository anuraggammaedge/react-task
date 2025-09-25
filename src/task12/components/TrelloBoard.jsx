import React from "react";
import { useTrelloBoard } from "../zustandStore.js";
import { TrelloColumn } from "./TrelloColumn";

export const TrelloBoard = () => {
  const { tasks } = useTrelloBoard();
  const columns = ["To Do", "In Progress", "Done"];
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap bg-gray-200 p-6 m-5 gap-2  justify-between rounded-xl">
      {columns.map((col, i) => {
        return (
          <TrelloColumn
            key={i}
            title={col}
            tasks={tasks.filter((task) => task.status === col)}
          />
        );
      })}
    </div>
  );
};
