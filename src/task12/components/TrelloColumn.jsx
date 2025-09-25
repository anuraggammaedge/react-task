import React from "react";
import { TrelloTask } from "./TrelloTask";

export const TrelloColumn = ({ title, tasks }) => {
  return (
    <div className="p-2 w-full rounded-xl">
      <h2 className="text-lg font-bold py-3 ml-1 text-black">{title}</h2>
      <div className="">
        {tasks.map((task) => {
          return <TrelloTask key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
