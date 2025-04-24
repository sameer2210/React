/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ObjectJson() {
  const [profiles, setprofiles] = useState([
    { name: "sam", age: 23, city: "Bhopal" },
    { name: "mca", age: 28, city: "Bihar" },
    { name: "pallu ", age: 13, city: "Bengal" }
  ]);
  let profileRender = profiles.map((profile, index) => (
    <div key={index}>
      <h2>Name: {profile.name}</h2>
      <h3>Name: {profile.age}</h3>
      <h4>Name: {profile.city}</h4>
    </div>
  ));
  return (
    <div>
      <h1>Profile Json</h1>
      <h4>{profileRender}</h4>
    </div>
  );
}

export default ObjectJson;
