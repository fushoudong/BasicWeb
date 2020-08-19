import React from 'react';
import {Button} from 'antd'

const ProductList = (props) => {
  const addData = () => {
    props.dispatch({
      type: 'product/addProduct',
      item: {
        name: '斐斐'
      }
    })
  }
  const addDataAsync = () => {
    props.dispatch({
      type: 'product/addProductAsync',
      item: {
        name: '一生一世'
      }
    })
  }
  const backHome = () => {
    props.history.push('/')
  }
  const {productList} = props.product
  console.log(props)
  return (
    <div>
      <p>ProductList {props.data}</p>
      <Button type="primary" onClick={addData}>添加数据</Button>
      <Button type="primary" onClick={addDataAsync}>异步添加数据</Button>
      <ul>
        {
          productList.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>
      <Button type="primary" danger onClick={backHome}>返回首页</Button>
    </div>
  );
};
export default ProductList;
