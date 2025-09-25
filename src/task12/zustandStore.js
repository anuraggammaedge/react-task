import { create } from "zustand";

export const useTrelloBoard = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description:
        "A Kanban board designed with Tailwind CSS leverages Tailwind's utility-first framework to create a visually appealing and functional project management tool. The core components of such a board typically include",
      status: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "A Kanban board designed with Tailwind CSS leverages Tailwind's utility-first framework to create a visually appealing and functional project management tool. The core components of such a board typically include",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "A Kanban board designed with Tailwind CSS leverages Tailwind's utility-first framework to create a visually appealing and functional project management tool. The core components of such a board typically include",
      status: "Done",
    },
    {
      id: 4,
      title: "Task 4",
      description:
        "A Kanban board designed with Tailwind CSS leverages Tailwind's utility-first framework to create a visually appealing and functional project management tool. The core components of such a board typically include",
      status: "Done",
    },
  ],
  updateTaskStatus: (id, newStatus) =>
    set((state) => ({
      tasks: state?.tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    })),
}));
