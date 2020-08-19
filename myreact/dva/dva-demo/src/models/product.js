export default {
  namespace: "product",
  state: {
    productList: [
      {
        name: "小麦",
      },
      {
        name: "玉米",
      },
    ],
  },
  reducers: {
    addProduct(state, action) {
      console.log(action);
      const product = deepClone(state);
      product.productList.push(action.item);
      return product;
    },
  },
  effects: {
    *addProductAsync(item, { call, put }) {
      // console.log(item)
      yield put({ type: "addProduct", item: item.item });
    },
  },
};
function deepClone(state) {
  const str = JSON.stringify(state);
  const _obj = JSON.parse(str);
  return _obj;
}
