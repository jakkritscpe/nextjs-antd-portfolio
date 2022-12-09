import React, { useState } from "react";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  SettingOutlined,
  UserOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import style from "../components/styles/dashboard.module.css";
import {
  Layout,
  Menu,
  theme,
  Avatar,
  Switch,
  ConfigProvider,
  Col,
  Row,
  Space,
  Grid,
} from "antd";
import Profile from "./profile/Profile";
import Skill from "./skill/Skill";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const Dashboard: React.FC = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(true);
  const [sizeAvatar, setSizeAvatar] = useState(40);
  const [checkSwith, setCheckSwith] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function OnClickHandle() {
    setCollapsed(!collapsed);
    collapsed ? setSizeAvatar(100) : setSizeAvatar(40);
  }

  const onChangeSwith = (checked: boolean) => {
    checked ? setCheckSwith(true) : setCheckSwith(false);
  };

  return (
    <>
      {/* {console.log(screens)} */}
      <Layout>
        <Sider
          theme={checkSwith ? "dark" : "light"}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={style.center}>
            <Avatar
              style={{
                margin: 12,
              }}
              size={sizeAvatar}
              src="https://sv1.picz.in.th/images/2022/12/08/GHFoKu.png"
              icon={<UserOutlined />}
            />
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "rgba(187, 187, 187, 0.06)",
              },
            }}
          >
            <Menu
              theme={checkSwith ? "dark" : "light"}
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Profile",
                },
                {
                  key: "2",
                  icon: <AuditOutlined />,
                  label: "Certificate",
                },
                {
                  key: "3",
                  icon: <SettingOutlined />,
                  label: "Setting",
                },
              ]}
            />
            <div
              className={style.center}
              style={{ margin: "20px" }}
              hidden={screens.xl ? false : true}
            >
              {React.createElement(
                collapsed ? RightCircleOutlined : LeftCircleOutlined,
                {
                  className: style.trigger,
                  onClick: () => OnClickHandle(),
                }
              )}
            </div>
          </ConfigProvider>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className={style.left}>
              <div className={style.typing}>I am Software Engineer.</div>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#000000",
                  },
                }}
              >
                {/* <Switch
                  className={style.autoleft}
                  defaultChecked={checkSwith}
                  onChange={onChangeSwith}
                  
                /> */}
              </ConfigProvider>
            </div>
          </Header>
          <Content
            style={{
              margin: "16px",
              padding: 0,
              minHeight: "100vh",
            }}
          >
            <Row gutter={10} hidden={screens.xl ? false : true}>
              <Col span={6}>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <Profile />
                </Space>
              </Col>
              <Col span={8}>
                <Skill />
              </Col>
            </Row>
            <Row gutter={10} hidden={screens.xl ? true : false}>
              <Col >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <Profile />
                  <Skill />
                </Space>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
