import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LogoSrc from "./assets/logo.png";
import KakaoLoginSrc from "./assets/kakao_login_medium_narrow.png";
import Button from "@mui/material/Button";
import LoginEmail from "./LoginEmail";

const showbox = {};

const boxStyle = {
  display: { xs: "none", sm: "inline-flex", md: "inline-flex" },
  flexDirection: "column",
  width: "500px",
  height: "500px",
  justifyContent: "center",
  alignItems: "center",
};

const boxMobileStyle = {
  display: { xs: "inline-flex", sm: "none", md: "none" },
  flexDirection: "column",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const Login = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const []
  const [statusLoginEmail, setStatusLoginEmail] = React.useState(false);

  const onClickClose = () =>{
    // console.log('close');
    props.setLoginOpen(false);
    
  }

  const onClickLoginEmail = () => {
    console.log("hello");
    setStatusLoginEmail((prev)=>!prev);
  };

  const NomalLoginBox = (props) => {
    return (
      <Box sx={props.sx}>
        <img alt="logo" src={LogoSrc} style={{ width: "35%" }} />
        <br />
        <Button size="large">
          <img alt="kakao login" src={KakaoLoginSrc} />
        </Button>
        <br />
        <Button
          sx={{ width: "183px", backgroundColor: "lightgrey" }}
          size="large"
          onClick={onClickLoginEmail}
        >
          이메일 로그인
        </Button>
        <br />
        <Button sx={{ color: "black" }}>회원가입 하기</Button>
      </Box>
    );
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullScreen={fullScreen}
      maxWidth="md"
    >
     
      <DialogContent>
        <Box sx={{textAlign:'right'}} onClick={onClickClose}> <Button>X</Button></Box>
        <NomalLoginBox sx={boxStyle} />
        <NomalLoginBox sx={boxMobileStyle} />
        <LoginEmail
          sx={{
            display: statusLoginEmail
              ? { xs: "none", sm: "flex", md: "flex" }
              : "none",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Login;
