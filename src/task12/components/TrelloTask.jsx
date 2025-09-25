import React from "react";
import { useTrelloBoard } from "../zustandStore.js";

export const TrelloTask = ({ task }) => {
  const { updateTaskStatus } = useTrelloBoard();
  const handleChange = (newStatus) => {
    updateTaskStatus(task.id, newStatus);
  };
  return (
    <div className="shadow-sm p-4 rounded-xl bg-white my-2">
      <h2 className="text-md font-semibold">{task.title}</h2>
      <p className="text-sm py-2 text-gray-500">{task.description}</p>
      <div className="py-2">
        <select
          className="border border-gray-500 w-fit p-2 rounded-xl cursor-pointer"
          defaultValue={task.status}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
};
