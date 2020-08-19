import React from 'react'
import {connect} from 'dva'

import ProductList from '../../components/ProductList'

class ProductPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const props = this.props
    return (
      <div>
        <ProductList data="希望斐斐牙齿早点好" {...props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(ProductPage)