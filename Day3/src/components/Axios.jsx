import { React, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://picsum.photos/v2/list");          //data from api (backend)
    // console.log(response);
    setData(response.data);
    // console.log(data)
  };

  return (
    <div>
      <button onClick={getData}>get Data = Lorem picsum 2:15:44</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div key={idx}>
              <img src={elem.download_url} alt="network error" />
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
