import React,{useState, useEffect} from 'react';
import './App.css';
import Antd from './Antd'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    // fetch("/capp/cabinet/allcell_list",{
    //   method: 'POST',
    //   body: {
    //     "cabinet_code": '1500502'
    //   }
    // }).then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
    axios({
      url: '/capp/cabinet/allcell_list',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      params: {
        cabinet_code: '1500520'
      }
    }).then(res => {
      console.log(res)
    })
  })
  return (
    <div className="App">
      <Antd />
    </div>
  );
}

export default App;
