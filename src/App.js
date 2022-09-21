import { useState, useEffect } from "react";
import "./App.css";
import DateSelector from "./components/DateSelector";
import Menu from "./components/Menu";

function App() {
  const dateString = new Date() //'yyyy-mm-dd'
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");
  const today = new Date(dateString); // 초기 날짜 Date 객체

  const [sday, setSday] = useState(today.getTime() / 1000 - 32400); // UTC값
  const [url, setUrl] = useState(
    `https://dgucoop.dongguk.edu/mobile/menu.html?code=5&sday=${sday}`
  );

  const differ = 13 - today.getDay();
  const maxDateString = new Date(today.setDate(today.getDate() + differ))
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSday(newDate.getTime() / 1000 - 9 * 60 * 60);
  };

  useEffect(() => {
    setUrl((pre) => pre.slice(0, 57) + sday);
  }, [sday]);

  return (
    <div className="App">
      <Menu url={url} />
      <DateSelector
        maxDateString={maxDateString}
        dateString={dateString}
        handleDateChange={handleDateChange}
      />
    </div>
  );
}

export default App;
