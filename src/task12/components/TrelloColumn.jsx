import React from "react";
import { TrelloTask } from "./TrelloTask";
import { AddTask } from "./AddTask";
import { useDrop } from "react-dnd";
import { useTrelloBoard } from "../zustandStore";

export const TrelloColumn = ({ title, tasks, message }) => {
  const updateTaskStatus = useTrelloBoard((state) => state.updateTaskStatus);
  const [, drop] = useDrop({
    accept: "task",
    drop: (item) => updateTaskStatus(item.id, title),
  });
  return (
    <div ref={drop} className="p-2 w-full rounded-xl">
      <h2 className="text-lg font-bold py-3 ml-1 text-black">{title}</h2>

      {tasks.length === 0 && (
        <div className="bg-white shadow-sm p-2 rounded-xl my-2 px-4 text-gray-500 text-sm flex justify-between items-center">
          <span>{message}</span>
          {title === "To Do" && <AddTask />}
        </div>
      )}
      <div>
        {tasks.map((task) => {
          return <TrelloTask key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
