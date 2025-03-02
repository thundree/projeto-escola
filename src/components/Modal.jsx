import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute w-full h-full bg-gray-800 opacity-50" />
      <div className="relative flex w-full h-full">
        <button
          className="absolute top-3 right-5 w-3 h-3 cursor-pointer"
          onClick={onClose}
        >
          <IoMdClose className="text-white" />
        </button>

        <div className="m-auto flex bg-white rounded-lg p-4">{children}</div>
      </div>
    </div>,
    document.getElementById("generic-portal-root")
  );
}
