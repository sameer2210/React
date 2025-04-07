import React, { useState } from "react";

function Bulb() {
  const[a, b] = useState(false);
  return (
    <div className="text-black text-2xl">
      <h3 className={`${a === false? "text-emerald-600" : "text-red-600"}`}>{a === false ? "hello" : "hey"}</h3>
      <button onClick={() => b(!a)}>change</button>
    </div>
  );
}

export default Bulb;
