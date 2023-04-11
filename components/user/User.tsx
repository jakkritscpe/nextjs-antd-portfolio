import React from "react";
import {
  SettingOutlined,
  InfoCircleOutlined,
  GithubOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import { Divider, Card, Button, Typography, Space } from "antd";

const { Meta } = Card;
const { Text } = Typography;

const User = () => {
  return (
    <Card
      cover={
        <img
          alt="profile"
          src="https://sv1.picz.in.th/images/2022/12/08/GHOSml.jpg"
        />
      }
    >
      <Meta title="Jakkrit Sueakhonburee" description="(Ton)" />
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Divider>
          <InfoCircleOutlined /> About
        </Divider>
        <Text strong>Contact</Text>
        <a>
          <MailOutlined /> jakkrits.cpe@gmail.com
        </a>
        <a href="https://github.com/jakkritscpe">
          <GithubOutlined /> www.github.com
        </a>
        <Text strong>Education</Text>
        <div>
          <Text type="secondary">
            <SettingOutlined /> Naresuan University | Faculty of engineering |
            Computer Engineering (2016-2020)
          </Text>
        </div>
        <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Button block>
            <DownloadOutlined /> Download Resume
          </Button>
        </a>
      </Space>
    </Card>
  );
};

export default User;
