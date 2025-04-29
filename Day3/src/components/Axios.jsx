import { React, useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://picsum.photos/v2/list"); //data from api (backend)
    // console.log(response);
    setData(response.data);
    // console.log(data)
  };

  useEffect(() => {
    getData()
  },[])

  return (
    <div className = " h-screen bg-green-100 p-5">
      <button className="px-3 py-2 border-black border-2 rounded-2xl bg-gray-300 font-semibold" onClick={getData}>get Data</button>
      <div className="  bg-gray-400 mt-4 font-semibold">
        {data.map(function (elem, idx) {
          return (
            <div key={idx} className="flex justify-between gap-6 px-5 py-2 items-center">
              <img className="w-1/4" src={elem.download_url} alt="network error" />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Axios;

// npm i axios
// Lorem picsum = get data in json from api
