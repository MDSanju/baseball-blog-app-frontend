import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {
  StyledBlogsWrapper,
  StyledLeftSide,
  StyledRightSide,
  StyledRootWrap,
} from "@/styles/landing.styles";

const Blogs = () => {
  return (
    <StyledRootWrap>
      <StyledBlogsWrapper>
        <StyledLeftSide>
          <LeftSide />
        </StyledLeftSide>
        <StyledRightSide>
          <RightSide />
        </StyledRightSide>
      </StyledBlogsWrapper>
    </StyledRootWrap>
  );
};

export default Blogs;
