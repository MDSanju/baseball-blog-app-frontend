import styled from "styled-components";

// Initial styles

export const StyledRootWrap = styled.div`
  max-width: 1320px;
  margin: auto;
`;

// Header & banner styles

export const StyledBannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

export const StyledNavLogo = styled.img`
  width: 3rem;
`;

// Blogs or main part styles

export const StyledBlogsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: start;
  gap: 4rem;
  margin: 32px 32px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`;

export const StyledLeftSide = styled.div`
  width: 67%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledRightSide = styled.div`
  width: 33%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// Left side styles

export const StyledTitle = styled.h1`
  font-size: 1.8rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const StyledBlogText = styled.p`
  color: #535353;
  font-size: 17px;
  font-style: normal;
  font-weight: normal;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.8;
`;

export const StyledBlogButton = styled.button`
  background: linear-gradient(#f6598b 45%, #fe6c98);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1rem;
  padding: 22px 30px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: transparent;
    color: #f6598b;
    border: 2px solid #f6598b;
  }
`;

export const StyledBoldText = styled.p`
  color: #535353;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.8;
`;

// Right side styles

export const StyledCustomButton = styled.button`
  background: transparent;
  width: 100%;
  color: #535353;
  font-size: 14px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  line-height: 41px;
  border: 1px solid #ebebeb;
  border-top-color: #addbbe;
  cursor: pointer;
`;

export const StyledAllBlogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledBlog = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
`;

export const StyledBlogImgLeft = styled.div`
  width: 24%;
`;

export const StyledBlogContentRight = styled.div`
  width: 76%;
  & h4 {
    color: #535353;
    margin-bottom: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.45;
  }
  & p {
    display: inline;
    color: #228be6;
    font-size: 10px;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const StyledNote = styled.p`
  color: #535353;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 1.8;
`;
