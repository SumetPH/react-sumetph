import React from "react";

// asset
import Profile from "../../assets/img/profile.png";

function Personal() {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <img className="w-32 h-32 rounded-full mx-auto" src={Profile} alt="" />
      <div className="ml-3 text-md">
        <h2 className="font-bold text-2xl">Personal</h2>
        <p>
          Name : Sumet Phongphila
          <br />
          Birthday: 11 February 1997
          <br />
          Nationality : Thai
        </p>
      </div>
    </div>
  );
}

export default Personal;
