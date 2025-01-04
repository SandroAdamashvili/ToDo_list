import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddIcon from "./assets/add-icon.svg";
import DeleteIcon from "./assets/delete-icon.svg";
import EditIcon from "./assets/edit-icon.svg";
import TickIcon from "./assets/tick-icon.svg";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskName) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { completed: false, name: taskName },
    ]);
    console.log(tasks);
  }

  function handleEditTask(index, editedName) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, name: editedName } : task
      )
    );
  }

  function handleComplete(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeletion(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <Modal
        open={modalOpen !== false}
        closeModal={() => setModalOpen(false)}
        addTask={
          modalOpen === true
            ? handleAddTask
            : (taskName) => handleEditTask(modalOpen, taskName)
        }
      />
      <div className="flex flex-col items-center gap-[18px] h-full">
        <h1 className="font-bold text-2xl">TODO LIST</h1>
        <div className="w-[750px] mb-4">
          <Header />
        </div>
        <div>
          {tasks.map((task, index) => {
            return (
              <>
                {task.completed ? (
                  <div
                    key={index}
                    className="flex flex-row justify-between mb-5 w-[520px]"
                  >
                    <div className="flex flex-row gap-7">
                      <div
                        key={Math.random}
                        className="w-[26px] h-[26px] rounded-sm border bg-[#6C63FF] flex items-center justify-center hover:cursor-pointer"
                        onClick={() => handleComplete(index)}
                      >
                        <img src={TickIcon} alt="tick icon" />
                      </div>
                      <p
                        key={Math.random()}
                        className="font-semibold text-xl text-[#25252580] line-through"
                      >
                        {task.name}
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <img
                        src={EditIcon}
                        alt="edit icon"
                        className="w-[18px] hover:cursor-pointer"
                        onClick={() => setModalOpen(index)}
                      />
                      <img
                        src={DeleteIcon}
                        alt="delete icon"
                        className="w-[18px] hover:cursor-pointer"
                        onClick={() => handleDeletion(index)}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex flex-row justify-between mb-5 w-[520px]"
                  >
                    <div className="flex flex-row gap-7">
                      <div
                        key={Math.random}
                        className="w-[26px] h-[26px] rounded-sm border border-[#6C63FF] hover:cursor-pointer"
                        onClick={() => handleComplete(index)}
                      ></div>
                      <p key={Math.random()} className="font-semibold text-xl">
                        {task.name}
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <img
                        src={EditIcon}
                        alt="edit icon"
                        className="w-[18px] hover:cursor-pointer"
                        onClick={() => setModalOpen(index)}
                      />
                      <img
                        src={DeleteIcon}
                        alt="delete icon"
                        className="w-[18px] hover:cursor-pointer"
                        onClick={() => handleDeletion(index)}
                      />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div
          className="p-4 bg-[#6C63FF] rounded-[50%] fixed bottom-4 right-1/4 hover:cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <img src={AddIcon} alt="add icon" />
        </div>
      </div>
    </>
  );
}

export default App;
