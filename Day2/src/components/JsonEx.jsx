import React from "react";
import JsonCard from "./SubComponents/JsonCard";

const JsonEx = () => {
  const user = [
    {
      photo: "src",
      name: "sameer",
      age: 69,
      batch: "mern13",
      city: "bhopal"
    },
    {
      photo: "src",
      name: "mca",
      age: 28,
      batch: "mern12",
      city: "bhojpur"
    },
    {
      photo: "src",
      name: "pallu",
      age: 36,
      batch: "mern11",
      city: "bangal"
    },
    {
      photo: "src",
      name: "aayu",
      age: 13,
      batch: "mern11",
      city: "patna"
    }
  ];
  return (
    <div>
      {user.map(function (element, index) {
        return (
          <JsonCard
            key={index}
            photo={element.photo}
            name={element.name}
            age={element.age}
            batch={element.batch}
            city={element.city}
          />
        );
      })}
    </div>
  );
};

export default JsonEx;
