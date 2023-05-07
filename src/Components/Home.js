import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../Services/Actions/action";

export default function Home() {
  const myStyle = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  function handleChange(event) {
    console.warn(event.target.value);
  }
  return (
    <div>
      <h1>Increament and Decreament Counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <button
          className="quantity-minus"
          title="Decreament"
          onClick={() => dispatch(decreament(1))}
        >
          <span> - </span>
        </button>
        <input
          type="text"
          name="quantity"
          className="quantity_input"
          onChange={handleChange}
          value={myStyle}
        />
        <button
          className="quantity-plus"
          title="Increament"
          onClick={() => dispatch(increament(1))}
        >
          <span> + </span>
        </button>
      </div>
    </div>
  );
}
