import React from "react";

const PPcomponent = ({ pdata }) => {
  return (
    <ul>
      {pdata.map((p, index) => (
        <li key={index} className="text-[#6B6868]">
          <h3 className="font-bold">{p.title}</h3>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PPcomponent;
