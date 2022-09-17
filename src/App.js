import { useState, Suspense } from "react";
import "./App.css";
import Menu from "./components/Menu";
import parseMenu from "./utils/parseMenu";
import { getMenu, fetchInitHtml } from "./api/fetchData";
import DateSelector from "./components/DateSelector";

const html = fetchInitHtml();

function App() {
  const [menu, setMenu] = useState(parseMenu(html.read()));
  const [dateString, setDateString] = useState(
    new Date()
      .toLocaleDateString()
      .match(/[0-9]+/g)
      .map((date) => (date.length === 1 ? 0 + date : date))
      .join("-")
  );
  const today = new Date(dateString);
  const differ = 13 - today.getDay();
  const maxDateString = new Date(today.setDate(today.getDate() + differ))
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");

  const handleDateChange = async (event) => {
    const newDate = new Date(event.target.value);
    const menu = await getMenu(newDate.getTime() / 1000 - 9 * 60 * 60);
    setMenu(menu);
  };

  return (
    <div className="App">
      <div className="container">
        <Suspense fallback={<div>loading...</div>}>
          <Menu menu={menu} />
        </Suspense>
      </div>
      <DateSelector
        maxDateString={maxDateString}
        dateString={dateString}
        handleDateChange={handleDateChange}
      />
    </div>
  );
}

export default App;
