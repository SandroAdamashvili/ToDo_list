import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddIcon from "./assets/add-icon.svg";
import Modal from "./components/Modal";
import Tasks from "./components/Tasks";

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

  function handleModalOpen(index) {
    setModalOpen(index);
  }

  console.log(tasks);

  return (
    <>
      <Modal
        open={modalOpen !== false}
        closeModal={() => handleModalOpen(false)}
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
          {tasks.map((task, index) => (
            <Tasks
              task={task}
              index={index}
              handleComplete={handleComplete}
              handleDeletion={handleDeletion}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </div>

        <div
          className="p-4 bg-[#6C63FF] rounded-[50%] fixed bottom-4 right-1/4 hover:cursor-pointer"
          onClick={() => handleModalOpen(true)}
        >
          <img src={AddIcon} alt="add icon" />
        </div>
      </div>
    </>
  );
}

export default App;
