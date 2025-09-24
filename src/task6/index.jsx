import React, { useState } from "react";
import { Modal } from "./modal/Modal";

export const SixthTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((s) => !s);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        className={`m-4 border border-gray-400 rounded-xl w-32 font-semibold text-black p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer`}
        onClick={handleOpen}
      >
        Open Model
      </button>
      <Modal open={open} handleClose={handleClose} className="w-xl">
        <Modal.Header>
          <h3 className="px-4 py-2 text-xl font-semibold text-gray-900">
            Terms of Service
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleClose}
              type="button"
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="cursor-pointer py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Decline
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
