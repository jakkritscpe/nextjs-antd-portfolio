import { ToolOutlined } from "@ant-design/icons";
import { Avatar, Space, Card, Divider, Tag, Typography, Carousel } from "antd";
import React from "react";
import style from "../tools/style/tools.module.css";

const { Text, Link } = Typography;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  width: "100%",
  color: "#000000",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#ff0404",
};

const contentStyle2: React.CSSProperties = {
  height: "160px",
  width: "100%",
  // backgroundColor: "#ff0404",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};



const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,

};

const tools = [
  {
    id: 1,
    name: "Javascript",
    url_img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    id: 2,
    name: "Python",
    url_img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    id: 3,
    name: "html",
    url_img: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
  },
  {
    id: 4,
    name: "css",
    url_img: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
  },
  {
    id: 5,
    name: "TypeScript",
    url_img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    id: 7,
    name: "Nodejs",
    url_img: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
  },
  {
    id: 8,
    name: "Git",
    url_img: "https://www.svgrepo.com/show/452210/git.svg",
  },
  // {
  //   id: 9,
  //   name: "Go",
  //   url_img: "https://www.svgrepo.com/show/373632/go.svg",
  // },
];

const Tools: React.FC = () => (
  <Card>
    <Divider orientation="left">
      <ToolOutlined /> Tools
    </Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="cyan">All</Tag>
      <Tag color="cyan">Tools/framwork</Tag>
      <Tag color="cyan">Language Programming</Tag>
    </Space>
    <Carousel autoplay infinite={true} speed={10000} dots={false} >
      <div>
        <div style={contentStyle2}>
          {tools.map((tool) => (
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100px" }}
              className={style.box}
              key={tool.name}
            >
              <Avatar
                shape="square"
                size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
                src={tool.url_img}
              />
              <h4>{tool.name}</h4>
            </Space>
          ))}
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </Card>
);

export default Tools;
