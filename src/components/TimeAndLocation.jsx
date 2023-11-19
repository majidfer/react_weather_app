import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          <p>Minggu, 19 November 2023 | Local time: 16:45</p>
          <div className="flex items-center justify-center my-3">
            <p className="text-white text-2xl font-medium">
              Bandung, Jawa Barat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeAndLocation;
