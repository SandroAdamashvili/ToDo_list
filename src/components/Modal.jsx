import { useEffect, useRef } from "react";

export default function Modal({ open, closeModal, addTask, text }) {
  const dialog = useRef();
  const input = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  function handleAddTask() {
    if (input.current.value.length > 0) {
      addTask(input.current.value.trim());
      input.current.value = "";
      closeModal();
    }
  }

  return (
    <dialog
      ref={dialog}
      className="outline-none z-10 rounded-lg w-[500px] h-[300px] py-3 px-7"
    >
      {open && (
        <div className="flex flex-col h-full justify-between">
          <div className="w-full">
            <h2 className="font-bold text-2xl mb-4">NEW NOTE</h2>
            <input
              type="text"
              placeholder="Input your note..."
              className="placeholder:text-[#C3C1E5] outline-none w-full border border-[#6C63FF] rounded-[5px] px-3 py-1"
              ref={input}
              value={text}
            />
          </div>
          <div className="w-full flex flex-row justify-between">
            <button
              className="px-6 py-1 rounded-md text-lg text-[#6C63FF] border border-[#6C63FF] font-semibold"
              onClick={closeModal}
            >
              CANCEL
            </button>
            <button
              className="px-6 py-1 rounded-md text-lg text-white bg-[#6C63FF] font-semibold"
              onClick={handleAddTask}
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
