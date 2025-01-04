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

  return (
    <>
      <Modal
        open={modalOpen}
        closeModal={() => setModalOpen(false)}
        addTask={handleAddTask}
      />
      <div className="flex flex-col items-center gap-[18px] h-full">
        <h1 className="font-bold text-2xl">TODO LIST</h1>
        <div className="w-[750px] mb-4">
          <Header />
        </div>
        <div>
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between mb-5 w-[520px]"
              >
                <div className="flex flex-row gap-7">
                  {task.completed ? (
                    <div
                      key={Math.random}
                      className="w-[26px] h-[26px] rounded-sm border bg-[#6C63FF] flex items-center justify-center"
                    >
                      <img src={TickIcon} alt="tick icon" />
                    </div>
                  ) : (
                    <div
                      key={Math.random}
                      className="w-[26px] h-[26px] rounded-sm border border-[#6C63FF]"
                    ></div>
                  )}
                  <p key={Math.random()}>{task.name}</p>
                </div>
                <div className="flex flex-row gap-3">
                  <img
                    src={DeleteIcon}
                    alt="delete icon"
                    className="w-[18px]"
                  />
                  <img src={EditIcon} alt="edit icon" className="w-[18px]" />
                </div>
              </div>
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
