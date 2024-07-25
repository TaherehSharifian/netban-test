import React from "react";

const ChartData = ({ title, data }) => {
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex flex-col justify-between items-start">
        <span>{title}</span>
        <span className="text-xl">{data[1]}</span>
      </div>
      <div className="flex items-end justify-around h-12 w-20 p-1.5 rounded-lg">
        {data[0].map((value, index) => (
          <div
            key={index}
            className="w-1.5 bg-[#4a90e2] rounded-t-md"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ChartData;
