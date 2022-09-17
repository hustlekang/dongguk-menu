import React from "react";

export default function Menu(props) {
  return (
    <>
      <h1>lunch 집밥</h1>
      <ul>
        {props.menu.lunch1.foods ? (
          props.menu.lunch1.foods.map((food, idx) => <li key={idx}>{food}</li>)
        ) : (
          <li>closed</li>
        )}
        <li>
          {props.menu.lunch1 ? props.menu.lunch1.price : "메뉴가 없습니다"}
        </li>
      </ul>

      <h1>lunch 한그릇</h1>
      <ul>
        {props.menu.lunch2.foods ? (
          props.menu.lunch2.foods.map((food, idx) => <li key={idx}>{food}</li>)
        ) : (
          <li>closed</li>
        )}
        <li>
          {props.menu.lunch2 ? props.menu.lunch2.price : "메뉴가 없습니다"}
        </li>
      </ul>

      <h1>dinner 집밥</h1>
      <ul>
        {props.menu.dinner.foods ? (
          props.menu.dinner.foods.map((food, idx) => <li key={idx}>{food}</li>)
        ) : (
          <li>closed</li>
        )}
        <li>
          {props.menu.dinner ? props.menu.dinner.price : "메뉴가 없습니다"}
        </li>
      </ul>
    </>
  );
}
