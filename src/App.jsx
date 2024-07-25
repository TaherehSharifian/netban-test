// src/App.js
import React, { useEffect, useState } from "react";
import { fetchData } from "./core/Api";
import Card from "./components/Card";
import AssetsList from "./components/AssetsList";

function App() {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  let filteredAssets;
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  if (data) {
    filteredAssets = selectedCategory
      ? data.assets.filter((asset) => asset.type === selectedCategory)
      : data.assets;
  }

  return (
    <div className="bg-bg-dark text-white min-h-screen flex justify-center">
      <div className="w-[1200px] p-5">
        {data ? (
          <>
            <div className="flex flex-row gap-4 justify-between items-center">
              {["domain", "ip", "cloud"].map((key) => (
                <>
                  <div
                    className="m-0 p-0 cursor-pointer w-full"
                    onClick={() => setSelectedCategory(key)}
                  >
                    <Card key={key} title={key} data={data[key]} />
                  </div>
                </>
              ))}
            </div>
            <div className="flex flex-col p-7 bg-card-bg rounded-xl mt-10">
              <div className="flex flex-row justify-between items-center">
                <h1 className="mb-5 text-xl">Assets</h1>
                {selectedCategory && (
                  <h3
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Show All
                  </h3>
                )}
              </div>

              <AssetsList data={filteredAssets} />
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
