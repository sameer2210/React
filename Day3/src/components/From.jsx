import React, { useState } from "react";

const From = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ fullname, email });
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
        <br /><br />
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email Address"
        />
        <br /><br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default From;
