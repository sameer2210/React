import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./reducers/productSlice";
import { asyncloadproduct } from "./actions/productAction";
import ReviewComment from "./components/ReviewComment";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  console.log(data);

  const newProduct = {
    id: 1,
    title: "product 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  };

  const CreateProduct = () => {
    // normal function -> call()
    // action  -> dispatch (call())
    // create(newProduct);
    dispatch(create(newProduct));
  };

  const LoadProducts = () => {
    dispatch(asyncloadproduct());
  };

  // useEffect(() => {
  //   LoadProducts();
  // },[]);

  useEffect(() => {
    dispatch(asyncloadproduct());
  }, [dispatch]);

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center p-8 gap-4">
      <h1 className="text-2xl font-bold ">Redux</h1>
      <button
        className="px-2 py-1 bg-gray-800 text-white rounded-xl font-semibold"
        onClick={CreateProduct}
      >
        Create Product
      </button>

      <button
        className="px-2 py-1 bg-gray-800 text-white rounded-xl font-semibold"
        onClick={LoadProducts}
      >
        load Products
      </button>

      <ReviewComment/>

    </div>
  );
};

export default App;
