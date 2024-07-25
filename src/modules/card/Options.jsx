import React from "react";

const Options = ({ title, data }) => {
  const logo =
    title === "Ips"
      ? "/icons/globe.svg"
      : title === "Ports"
      ? "/icons/spark.svg"
      : "/icons/vulns.svg";

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="rounded-xl bg-saga mr-2 w-full h-full items-center justify-center flex p-2">
        <img src={logo} alt="" width={35} />
      </div>
      <div className="flex flex-col justify-between items-start">
        <span>{title}</span>
        <span className="text-xl">{data}</span>
      </div>
    </div>
  );
};

export default Options;
