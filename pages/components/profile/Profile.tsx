import React from "react";
import {
    SettingOutlined,
    InfoCircleOutlined,
    GithubOutlined,
    FacebookFilled,
    MailOutlined,
    DownloadOutlined,
  } from "@ant-design/icons";

  import {
    Divider,
    Card,
    Button,
    Typography,
  } from "antd";

const { Meta } = Card;
const { Text } = Typography;

const Profile = () => {
  return (
    <Card style={{ minHeight:"100vh" }}
      cover={
        <img
          alt="profile"
          src="https://sv1.picz.in.th/images/2022/12/08/GHOSml.jpg"
        />
      }
    >
      <Meta title="Jakkrit Sueakhonburee" description="(Ton)" />
      <Divider>
        <InfoCircleOutlined /> About
      </Divider>
      <Text strong>Contract</Text>
      <div style={{ margin: "10px 0px 0px 10px" }}>
        <Text type="secondary">
          <MailOutlined /> jakkrits.cpe@gmail.com
        </Text>
      </div>
      <div style={{ margin: "5px 0px 0px 10px" }}>
        <Text type="secondary">
          <FacebookFilled /> www.facebook.com
        </Text>
      </div>
      <div style={{ margin: "5px 0px 10px 10px" }}>
        <Text type="secondary">
          <GithubOutlined /> www.github.com
        </Text>
      </div>
      <Text strong>Education</Text>
      <div style={{ margin: "10px 0px 30px 10px" }}>
        <Text type="secondary">
          <SettingOutlined /> Naresuan University | Faculty of engineering |
          Computer Engineering (2016-2020)
        </Text>
      </div>
      <Button block>
        <DownloadOutlined /> Download Resume
      </Button>
    </Card>
  );
};

export default Profile;
