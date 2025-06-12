/* eslint-disable no-unused-vars */

import axios from "axios";
import { load } from "../reducers/productSlice";

// export function asyncloadproduct() {
//   return function (dispatch, getState) {};
// }

export const asyncloadproduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products/1");
    // console.log(data);
    dispatch(load([data]));
  } catch (error) {
    console.log(error);
  }
};
