import React from "react";

const ToScomponent = ({ data }) => {
  return (
    <ol className="list-decimal space-y-2 text-[#6B6868]">
      {data.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.description}
        </li>
      ))}
    </ol>
  );
};

export default ToScomponent;
