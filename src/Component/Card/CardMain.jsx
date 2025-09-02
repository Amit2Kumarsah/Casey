import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import "./CardMain.css";
import axios from "axios";

function CardMain() {
  const [allData, setAllData] = useState([]);

  const handleFetchInfo = async (e) => {
    try {
      const result = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
      );
      setAllData(result.data.features);
    } catch (err) {
      console.log("Error is :", err);
    }
  };

  useEffect(() => {
    handleFetchInfo();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Latest Earthquakes</h1>
      <div className="cardMain">
        {allData.map((data, index) => (
          <div key={index}>
            {console.log(data)}
            <Card
              mag={data.properties.mag}
              place={data.properties.place}
              lag={data.geometry.coordinates[0]}
              lat={data.geometry.coordinates[1]}
              depth = {data.geometry.coordinates[3]}
              time={new Date(data.properties.time)}
              detail={data.properties.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardMain;
