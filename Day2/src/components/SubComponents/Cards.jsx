import React from "react";
import Card2 from "./Card2"

const Cards = (props) => {
  console.log(props.a);

  return <div>
    <h1>Props Example</h1>
    <h2>value of A is {props.a}</h2>
    <br/>
    <div>
        <h1>{props.user}</h1>
        <h1>{props.age}</h1>
        <h1>{props.city}</h1>
    </div>

    <br/><hr/>

    <Card2 name={props.a}/>

  </div>;
};

export default Cards;
