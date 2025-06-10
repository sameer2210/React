import axios from "axios";

const Normal = () => {
  const GetProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center gap-3">
      <h1 className="text-xl font-bold">Axios</h1>

      <button
        onClick={GetProducts}
        className="px-2 py-1 text-white bg-gray-800 border  rounded-2xl"
      >
        get products
      </button>
    </div>
  );
};

export default Normal;
