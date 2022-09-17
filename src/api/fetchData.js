import parseMenu from "../utils/parseMenu";
import wrapPromise from "./wrapPromise";

// http 요청을 통해 html 문서를 받아서 string 타입으로 반환
const fetchHtml = async (sday) => {
  //netlify proxy오류 해결
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const query = PROXY + "/menu.html?code=5&sday=" + sday;
  try {
    const res = await fetch(query);
    return res.text();
  } catch (error) {
    console.log(error.message);
  }
};

const getMenu = async (sday) => {
  const html = await fetchHtml(sday);
  const menu = parseMenu(html);
  return menu;
};

const fetchInitHtml = () => {
  //netlify proxy오류 해결
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const yymmdd = new Date()
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");
  const sday = new Date(yymmdd).getTime() / 1000 - 32400;
  const query = PROXY + "/menu.html?code=5&sday=" + sday;
  const promise = fetch(query).then((res) => res.text());

  return wrapPromise(promise);
};

export { fetchHtml, getMenu, fetchInitHtml };
