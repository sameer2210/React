import React from "react";

const JsonCard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>JsonCard data from JsonEx</h1>
      <div>
        <img src={props.photo} alt="network error" />
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <h3>{props.batch}</h3>
        <h4>{props.city}</h4>
      </div>
    </div>
  );
};

export default JsonCard;
