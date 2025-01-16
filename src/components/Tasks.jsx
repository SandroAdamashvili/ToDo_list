import DeleteIcon from "../assets/delete-icon.svg";
import EditIcon from "../assets/edit-icon.svg";
import TickIcon from "../assets/tick-icon.svg";

export default function Tasks({
  task,
  index,
  filter,
  filterSearch,
  handleComplete,
  handleDeletion,
  handleModalOpen,
}) {
  return (
    <>
      {((task.completed && filter === "Complete") ||
        (!task.completed && filter === "Incomplete") ||
        filter === "All") &&
        task.name.includes(filterSearch) && (
          <div className="flex flex-row justify-between mb-5 w-[520px]">
            {task.completed ? (
              <div className="flex flex-row gap-7">
                <div
                  className="w-[26px] h-[26px] rounded-sm border bg-[#6C63FF] flex items-center justify-center hover:cursor-pointer"
                  onClick={() => handleComplete(index)}
                >
                  <img src={TickIcon} alt="tick icon" />
                </div>
                <p className="font-semibold text-xl text-[#25252580] line-through">
                  {task.name}
                </p>
              </div>
            ) : (
              <div className="flex flex-row gap-7">
                <div
                  className="w-[26px] h-[26px] rounded-sm border border-[#6C63FF] hover:cursor-pointer"
                  onClick={() => handleComplete(index)}
                ></div>
                <p className="font-semibold text-xl">{task.name}</p>
              </div>
            )}
            <div className="flex flex-row gap-3">
              <img
                src={EditIcon}
                alt="edit icon"
                className="w-[18px] hover:cursor-pointer"
                onClick={() => handleModalOpen(index)}
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
}
