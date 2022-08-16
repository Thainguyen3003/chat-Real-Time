import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { authentication } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const { Title } = Typography;

function Login() {
  const history = useNavigate();

  const handleFbLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
