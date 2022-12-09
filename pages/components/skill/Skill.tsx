import React, { useEffect, useState } from "react";
import { BranchesOutlined, BookOutlined } from "@ant-design/icons";

import {
  Divider,
  Card,
  Avatar,
  List,
  message,
  Timeline,
  Segmented,
  Row,
  Col,
  Space,
} from "antd";
import VirtualList from "rc-virtual-list";

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const Skill = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <Card style={{ minHeight: "100vh", padding: "0rem 0px 0px 0rem" }}>
      <Row gutter={16}>
        <Col>
          <Space direction="vertical" size="middle">
            <Divider orientation="left">
              <BranchesOutlined /> Experience
            </Divider>
            <div style={{ padding: "3.8rem" }}>
              <Timeline>
                <Timeline.Item>
                  Internship at Nerasuan University. (01/2021- 03/2021)
                </Timeline.Item>
                <Timeline.Item>
                  Internship at Posible Automation Company. (04/2021- 06/2021)
                </Timeline.Item>
                <Timeline.Item>
                  Programmer at Cimsystem Company. (07/2021- Now)
                </Timeline.Item>
              </Timeline>
            </div>
            <div>
              <Divider orientation="left">
                <BookOutlined /> Skills
              </Divider>
              <div style={{ padding: "2.5rem" }}>
                <Segmented style={{ margin: "0 0 2rem 0" }}
                  options={[
                    "Fornt End",
                    "Back End",
                    "Fullstack",
                    "AI",
                    "Mobile",
                  ]}
                />
                <List>
                  <VirtualList
                    data={data}
                    height={350}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                  >
                    {(item: UserItem) => (
                      <List.Item key={item.email}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture.large} />}
                          title={
                            <a href="https://ant.design">{item.name.last}</a>
                          }
                          description={item.email}
                        />
                        <div>Content</div>
                      </List.Item>
                    )}
                  </VirtualList>
                </List>
              </div>
            </div>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default Skill;
