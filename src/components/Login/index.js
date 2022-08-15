import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth } from "../../firebase/config";
import firebase from 'firebase/compat/app';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider)
    }

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} Level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>Đăng nhập bằng facebook</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
