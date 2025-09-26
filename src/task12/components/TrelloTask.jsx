import React from "react";
import { useTrelloBoard } from "../zustandStore.js";
import { useDrag } from "react-dnd";

export const TrelloTask = ({ task }) => {
  const updateTaskStatus = useTrelloBoard((state) => state.updateTaskStatus);
  const handleChange = (newStatus) => {
    updateTaskStatus(task.id, newStatus);
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="shadow-sm p-4 rounded-xl bg-white mb-4 cursor-pointer"
    >
      <h2 className="text-md font-semibold">{task.title}</h2>
      <p className="text-sm py-2 text-gray-500">{task.description}</p>
      <div className="py-2">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Update Status
        </label>
        <select
          className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
