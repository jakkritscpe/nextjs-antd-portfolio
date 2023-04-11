import { ToolOutlined, LoadingOutlined } from "@ant-design/icons";
import {
  Avatar,
  Space,
  Card,
  Divider,
  Tag,
  Typography,
  Carousel,
  Spin,
  Grid,
} from "antd";
import React, { useState, useEffect, useCallback } from "react";
import style from "../tools/style/tools.module.css";
import axios from "axios";
import useEffectOnce from "../../hooks/use-effect-once";


const { Text, Link } = Typography;

const { useBreakpoint } = Grid;

const contentStyle: React.CSSProperties = {
  height: "160px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
};

const contentStyleCenter: React.CSSProperties = {
  height: "160px",
  width: "100%",
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

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Tools: React.FC = () => {
  const screens = useBreakpoint();
  const [tools, setTools] = useState([]);
  const [categoryTools, setCategoryTools] = useState([]);
  const [divideTools, setDivideTools] = useState<any[][]>([]);
  const [size, setSize] = useState(6);

  const divideData = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    setDivideTools(result);
  };

  const fetchDataCategoryTools = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://rest-api-portfolio.onrender.com/categorytools"
      );
      const data = response.data.data;
      setCategoryTools(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchDataTools = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://rest-api-portfolio.onrender.com/tools"
      );
      const data = response.data.data;
      setTools(data);
      divideData(data, size);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffectOnce(() => {
    fetchDataCategoryTools();
    fetchDataTools();
  });


  if (categoryTools.length == 0 || tools.length == 0) {
    return (
      <Card>
        <Divider orientation="left">
          <ToolOutlined /> Tools
        </Divider>
        <Space direction="vertical" align="center" style={contentStyleCenter}>
          <Spin indicator={antIcon} />
        </Space>
      </Card>
    );
  }

  return (
    <Card>
      <Divider orientation="left">
        <ToolOutlined /> Tools
      </Divider>
      <Space size={[0, 8]} wrap>
        {categoryTools.map((category) => (
          <Tag key={category["id"]} color="cyan">
            {category["name"]}
          </Tag>
        ))}
      </Space>
      <Carousel autoplay infinite={true} speed={3000} dots={false}>
        {divideTools.map((tools, i) => (
          <div key={i}>
            <div  style={contentStyle}>
              {tools.map((t) => (
                <Space
                  direction="vertical"
                  align="center"
                  style={{ width: "100px" }}
                  className={style.box}
                  key={t["name"]}
                >
                  <Avatar
                    shape="square"
                    size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
                    src={t["url_img"]}
                  />
                  <h4>{t["name"]}</h4>
                </Space>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </Card>
  );
};

export default Tools;
