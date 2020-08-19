import React, {useState} from 'react'
import {Button} from 'antd'

export default () => {
  const [data, setData] = useState('我爱斐斐')
  return (
    <div>
      <p>{data}</p>
      <Button type="primary" onClick={() => setData(data + '一生一世')}>add</Button>
    </div>
  )
}