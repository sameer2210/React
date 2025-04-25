import React, {  useState } from "react";

const From2 = () => {
  const [gender, setgender] = useState("male");
  const [vote, setvote] = useState("eligible");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ gender, vote });
  };

  return (
    <div>
     <form onSubmit={submitHandler}>
        <input
          type="radio"
          name="gender"
          checked={gender === "male" && true}
          onChange={(e) => e.target.checked && setgender("male")}
        />
        Male <br />
        <input
          type="radio"
          name="gender"
          checked={gender === "female" && true}
          onChange={(e) => e.target.checked && setgender("female")}
        />
        feMale <br />
        <br />
        <br />
        <input
          type="checkbox"
          checked={vote === "eligible" ? true : false}
          onChange={(e) =>
            e.target.checked ? setvote("eligible") : setvote("not eligible")
          }
        />
        Eligible or Not Eligible for Vote?
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default From2;
