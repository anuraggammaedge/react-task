import { createContext, useContext } from "react";

const ModalContext = createContext();

export const Modal = ({ children, open, handleClose, className }) => {
  return (
    <ModalContext.Provider value={{ open, handleClose }}>
      {open && (
        <div className="fixed bg-gray-400/40 w-full h-full left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <div
            className={`${className} relative z-50 p-2  max-w-2xl max-h-full bg-white shadow-2xl rounded-xl`}
          >
            <div className="absolute right-2">
              <button
                onClick={handleClose}
                className="cursor-pointer text-black bg-transparent border border-gray-300 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

function Header({ children }) {
  const { open } = useContext(ModalContext);
  return <div className="mr-8">{children}</div>;
}

function Body({ children }) {
  return <div>{children}</div>;
}
function Footer({ children }) {
  return <div>{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
