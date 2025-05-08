import React, { useState } from "react";

const FormLive = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
    });
    console.log("this data -> ", data);

    const handelChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        // const { email, value } = e.target;               // why not !

        setData((prev) => ({
            ...prev,
            [name]: value,
            // [email]:value,
        }));
    };

    return (
        <div>
            <label>name</label>
            <input
                className="text-black border-black border-2 p-1"
                type="text"
                name="name"
                value={data.name}
                onChange={e => handelChange(e)}
            />
            <br />
            <br />
            <label htmlFor="">email</label>
            <input
              className="text-black border-black border-2 p-1"
                type="text"
                name="email"
                value={data.email}
                onChange={e => handelChange(e)}
            />
            <br />
            <br />

            <h1>live preview</h1>
            <p>
                <strong>name</strong>:{data.name}
            </p>
            <p>
                <strong>email</strong>:{data.email}
            </p>
        </div>
    );
};

export default FormLive;
