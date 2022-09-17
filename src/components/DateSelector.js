import React from "react";

export default function DateSelector(props) {
  return (
    <>
      <label htmlFor="datepicker">날짜를 선택하세요</label>
      <input
        id="datepicker"
        type="date"
        max={props.maxDateString}
        defaultValue={props.dateString}
        onChange={props.handleDateChange}
      />
      <label htmlFor="datepicker">2010년 ~ 차주까지 가능</label>
    </>
  );
}
