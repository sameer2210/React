/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ObjectMap() {
  const [scores, setscores] = useState([32, 4, 54, 6, 76, 87, 8, 35]);
  let scoreRender = scores.map((e, index) => <li key={index}>{e}</li>);
  return (
    <div>
      <h1>Scores</h1>
      <ol>{scoreRender}</ol>
    </div>
  );
}

export default ObjectMap;
