import "antd/dist/reset.css";
import MainLayout from "../components/MainLayout";
import { Col, Row } from "antd";
import User from "../components/user/User";
import Tools from "../components/tools/Tools";

export default function Home() {
  return (
    <MainLayout>
      <Row gutter={[16, 16]}>
        <Col xl={6} md={12} sm={24} xs={24}>
          <User />
        </Col>
        <Col xl={9} md={12} sm={24} xs={24}>
          <Tools />
        </Col>
        <Col xl={8} md={12} sm={24} xs={24}></Col>
      </Row>
    </MainLayout>
  );
}
