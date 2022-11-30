import React from "react";
import styled from "styled-components";

const Header = (props) => {

  const Nav = styled.nav`

    background: ${props.backgroundColor || "black"};
    color: ${props.color || "white"};
    font-size: ${props.fontSize || "16px"};
    padding: ${props.padding || "auto"};
    border-radius: ${props.borderRadius || "5px"};
    cursor: ${props.cursor || "center"};
    width: ${props.width || "auto"};
    height: ${props.height || "auto"};
    display: ${props.display || "flex"};
    justify-content: ${props.justifyContent || "space-around"};
    align-items: ${props.alignItems || "center"};

  `;
  return <Nav>{props.children}</Nav>;

};

export default Header;
