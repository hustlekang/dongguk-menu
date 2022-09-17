// 메뉴 배열을 인수로 전달받아서 가격을 제거하고
// return {foods : [음식1,음식2] , price: price}
const splitPriceAndFood = (menuArr) => {
  if (!menuArr) return { foods: undefined, price: undefined };

  const RegExp_Price = /￦ [0-9]{1},[0-9]{3}/;
  if (!RegExp_Price.exec(menuArr[menuArr.length - 1]))
    return { foods: undefined, price: undefined };
  const price = RegExp_Price.exec(menuArr[menuArr.length - 1])[0];
  // if (!price) return { foods: undefined, price: undefined };

  const copy_menuArr = [...menuArr];
  copy_menuArr[copy_menuArr.length - 1] = copy_menuArr[
    copy_menuArr.length - 1
  ].replace(price, "");

  return { foods: copy_menuArr, price: price };
};

export default splitPriceAndFood;
