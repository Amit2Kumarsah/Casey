import {React} from "react";

import "./Card.css";
import Map from "../Map/Map"

function Card({mag, place, lag, lat, depth, time, detail}) {
  
  return (
    <div className="card">
      <div className="card-top">
        <Map lag={lag} lat={lat}/>
      </div>
      <div className="card-buttom">
        <h2>{mag} magnitute</h2>
        <p>{place}</p>
        <p>{time.toLocaleString()}</p>
      </div>
      <hr />
        <a href={detail} target="_blank"><button>View Details</button></a>
    </div>
  );
}

export default Card;
