import React, { useState } from "react";

const FormEx = () => {
  const [fullname, setfullname] = useState("");           // Hooks = use to manage state
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("male");
  const [vote, setvote] = useState("eligible");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ fullname, email, gender, vote });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <br />
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          checked={gender === "male" && true}
          onChange={(e) => e.target.checked && setgender("male")}
        />
        male
        <br />
        <input
          type="radio"
          name="gender"
          checked={gender === "female" && true}
          onChange={(e) => e.target.checked && setgender("female")}
        />
        female
        <br />
        <input
          type="checkbox"
          checked={vote === "eligible" ? true : false}
          onChange={(e) =>
            e.target.checked ? setvote("eligible") : setvote("non-eligible")
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

export default FormEx;
