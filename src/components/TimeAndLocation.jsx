import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          <p>{formatToLocalTime(dt, timezone)}</p>
          <div className="flex items-center justify-center my-3">
            <p className="text-white text-2xl font-medium">
              {`${name}, ${country}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeAndLocation;
