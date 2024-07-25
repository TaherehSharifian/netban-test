import React from "react";

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate} at ${formattedTime}`;
};

const gradeTemplate = (grade) => {
  return (
    <span
      className="text-black flex justify-center items-center"
      style={{
        width: "40px",
        height: "40px",
        backgroundImage: `url(${
          grade === "F" ? "/icons/gradeF.svg" : "/icons/gradeD.svg"
        })`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <span>{grade}</span>
    </span>
  );
};

const prepareData = (data) => {
  return data.map((item) => ({
    Grade: gradeTemplate(item.grade),
    Name: item.name,
    Total_Vulnerabilities: item.total_vuls,
    Last_Seen: formatDateTime(item.lastSeen),
  }));
};

function AssetsList({ data }) {
  const preparedData = prepareData(data);
  const headers = preparedData.length > 0 ? Object.keys(preparedData[0]) : [];

  return (
    <div className="flex flex-col p-7 bg-card-bg rounded-xl">
      <h1 className="mb-5">Assets</h1>

      <div className="overflow-x-auto">
        <table
          className="min-w-full border-separate"
          style={{ borderSpacing: "0" }}
        >
          <thead className=" text-white">
            <tr>
              <td colSpan={headers.length}>
                <div
                  className="rounded-md overflow-hidden bg-[#3d4a5c]"
                  style={{ marginBottom: "16px" }}
                >
                  <div className="flex flex-row">
                    {headers.map((header) => (
                      <div
                        key={header}
                        className="flex-1 px-5 py-2 text-left font-extraligh"
                      >
                        {header.replace(/_/g, " ")}
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {preparedData.map((row, index) => (
              <tr key={index}>
                <td colSpan={headers.length}>
                  <div
                    className="rounded-md overflow-hidden"
                    style={{ marginBottom: "16px" }}
                  >
                    <div className="flex flex-row">
                      {headers.map((header) => (
                        <div
                          key={header}
                          className="flex-1 px-5 py-2 bg-[#283342] items-center flex"
                        >
                          {row[header]}
                        </div>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssetsList;
