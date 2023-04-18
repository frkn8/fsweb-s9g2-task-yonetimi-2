import { differenceInCalendarDays, differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
const date = new Date(taskObj.deadline);
const daysLeft = differenceInDays (date, new Date());
const lastDate = formatDistanceToNow(date, {addSuffix:true, locale: tr});
return (
  <div className="p-6 bg-white rounded-[5px] leading-6 mt-4 drop-shadow-md">
    <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
    <div className="text-xs">
      son teslim:{" "}
      <span className={`${daysLeft < 3 ? "bg-[#ffd9d4]" : "bg-[#ccc]"}`}>
        {lastDate}
      </span>
    </div>
    <p className="pt-2 px-0 pb-3 text-sm text-[#444]">
      {taskObj.description}
    </p>
    <div>
      {taskObj.people.map((p) => (
        <span
          className="inline-block py-1 px-3 text-sm border border-solid border-gray-300 mr-1 mb-1.5 rounded-[30px]"
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
    {onComplete && (
      <button
        className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-sm rounded border-0 cursor-pointer"
        onClick={() => onComplete(taskObj.id)}
      >
        Tamamlandı
      </button>
    )}
  </div>
);
}

export default Task;