// src/App.js
import React, { useEffect, useState } from "react";
import { fetchData } from "./core/Api";
import Card from "./components/Card";
import AssetsList from "./components/AssetsList";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div className="bg-bg-dark text-white min-h-screen flex justify-center">
      <div className="w-[1200px] p-5">
        {data ? (
          <>
            <div className="flex flex-row gap-4 justify-between items-center">
              {["domain", "ip", "cloud"].map((key) => (
                <Card key={key} title={key} data={data[key]} />
              ))}
            </div>
            <div className="mt-10">
              <AssetsList data={data["assets"]} />
            </div>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
