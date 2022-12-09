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
    <Card style={{ minHeight:"100vh" }}>
      <Row gutter={16}>
        <Col span={9}>
          {" "}
          <Divider orientation="left">
            <BookOutlined /> Skills
          </Divider>
          <Segmented
            style={{ margin: "0px 0px 20px 25px" }}
            options={["Fornt End", "Back End", "Fullstack"]}
          />
          <List>
            <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
            >
              {(item: UserItem) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            </VirtualList>
          </List>
          <Divider orientation="left" style={{ margin: "50px 0px 0px 0px" }}>
            <BranchesOutlined /> Experience
          </Divider>
          <Timeline style={{ margin: "50px 10px 10px 50px" }}>
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
        </Col>
        <Col span={9}></Col>
      </Row>
    </Card>
  );
};

export default Skill;
