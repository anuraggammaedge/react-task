import React, { useState } from "react";
import { useTrelloBoard } from "../zustandStore";
import { Modal } from "../../task6/modal/Modal.jsx";

export const AddTask = () => {
  const addTask = useTrelloBoard((state) => state.addTask);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const handleOpen = () => {
    setOpen((s) => !s);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFromSate) => ({
      ...prevFromSate,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData.title, formData.description);
    handleClose();
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="my-2 w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center justify-center me-2 cursor-pointer"
      >
        Add task
      </button>
      <Modal
        open={open}
        handleClose={handleClose}
        className=" mx-10 w-full md:w-xl"
      >
        <Modal.Header>
          <h2 className="text-lg font-bold p-4">Add new task</h2>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="p-4 flex flex-col w-full gap-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  htmlFor="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Design the trello board"
                  name="title"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  htmlFor="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Design the trello board"
                  name="description"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="my-2 w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center justify-center me-2 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
