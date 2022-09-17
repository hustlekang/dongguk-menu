// menuArr 요소 중에 ()가 있으면 이전 요소에 대한 설명임
// 이전 요소에 합쳐서 새롭게 배열을 만들어서 return
const bindFoodInfo = (menuArr) => {
  if (!menuArr[0]) return undefined; // 메뉴가 없을땐 undefined 반환

  return menuArr.reduce((acc, cur) => {
    // (메뉴의 설명) 이기 때문에 앞선 메뉴에 string을 합쳐줌
    if (cur.startsWith("(")) {
      let lastMenu = acc.pop();
      lastMenu += cur;
      return [...acc, lastMenu];
    }
    return [...acc, cur];
  }, []);
};

export default bindFoodInfo;
