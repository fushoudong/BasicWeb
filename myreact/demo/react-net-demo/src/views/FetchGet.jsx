import React from "react";

import { Button, Card } from "antd";

export default class FetchGet extends React.Component {
  constructor() {
    super();
    this.state = {
      travelnote: [],
      contentStyle: {
        margin: "10px auto",
        width: "400px",
        height: "250px",
        color: "#fff",
        lineHeight: "250px",
        textAlign: "center",
        background: "#364d79",
      },
    };
  }
  clickFetchGet = () => {
    fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({
          travelnote: data.song_list,
        });
      })
  };
  onChange = () => {};
  render() {
    const { travelnote, contentStyle } = this.state;
    return (
      <div>
        <Button onClick={this.clickFetchGet}>点击执行get</Button>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}>
          {
            travelnote.map((item, index) => {
            return <div key={index}>
              <img src={item.album_1000_1000} />
            </div>
            })
          }
        </Card>
      </div>
    );
  }
}
