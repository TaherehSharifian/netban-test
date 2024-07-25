// src/Card.js
import React from "react";
import ChartData from "../modules/card/ChartData";
import Options from "../modules/card/Options";

const Card = ({ title, data }) => {
  const cardInfo =
    title === "domain"
      ? {
          label: "Domains",
          color: "bg-dark-orange",
          logo: "/icons/cardIcon.svg",
        }
      : title === "ip"
      ? {
          label: "IP Addresses",
          color: "bg-dark-purple",
          logo: "/icons/cardIcon.svg",
        }
      : {
          label: "Cloud Access",
          color: "bg-dark-yellow",
          logo: "/icons/cloudsIcon.svg",
        };

  return (
    <div className="shadow-md rounded-lg p-4 flex-1 bg-card-bg">
      <div className="flex flex-col justify-start items-start border-b pb-2">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-start justify-center mb-5 flex-1">
            <span
              className={`${cardInfo.color} rounded-xl w-auto flex flex-col justify-between`}
            >
              <img
                src={cardInfo.logo}
                alt=""
                width={50}
                className="mx-3 my-1"
              />
              <span className="bg-white text-black w-auto text-center rounded-bl-xl rounded-br-xl">
                {data.total}
              </span>
            </span>
          </div>
          <span>
            <img src="./icons/link.svg" alt="" width={20} />
          </span>
        </div>

        <h2>{cardInfo.label}</h2>
      </div>

      <div className="flex flex-row justify-between gap-3 py-2 border-b">
        {["live", "monitored"].map((key) => (
          <ChartData
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            data={[data[key], data[`total_${key}`]]}
          />
        ))}
      </div>
      <div className="flex flex-row py-2 justify-between gap-3 ">
        {["ips", "ports", "vulns"].map((key) => (
          <Options
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            data={[data[key]]}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
