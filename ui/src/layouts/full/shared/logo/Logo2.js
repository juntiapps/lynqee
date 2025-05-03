import { Link } from "react-router-dom";
import { ReactComponent as LogoDark1 } from "../../../../assets/images/logos/dark1-logo.svg";
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "50px",
  width: "360px",
  overflow: "hidden",
  display: "block",
}));

const Logo2 = () => {
  return (
    <LinkStyled
      to="/"
      height={50}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LogoDark1 />
    </LinkStyled>
  );
};

export default Logo2;
