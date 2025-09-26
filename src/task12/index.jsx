import React from "react";
import { TrelloBoard } from "./components/TrelloBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

export const TwelfthTask = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className="text-3xl m-4 font-semibold">Trello Board</h1>
        <TrelloBoard />
      </div>
    </DndProvider>
  );
};
