import React from "react";
import { Box, Image } from "@mantine/core";
import {
  StyledAllBlogs,
  StyledBlog,
  StyledBlogContentRight,
  StyledBlogImgLeft,
  StyledCustomButton,
  StyledNote,
} from "@/styles/landing.styles";

const RightSide = () => {
  return (
    <Box>
      <StyledCustomButton style={{ marginBottom: "24px" }}>
        Latest Articles
      </StyledCustomButton>
      <StyledAllBlogs>
        <StyledBlog>
          <StyledBlogImgLeft>
            <Image
              src="https://i.ibb.co/9NBK1mT/caitlin-conner-i-v-Yj-W5-A6-NU-unsplash.jpg"
              alt="Blog image"
              height={75}
            />
          </StyledBlogImgLeft>
          <StyledBlogContentRight>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing</h4>
            <p>Blog</p>
          </StyledBlogContentRight>
        </StyledBlog>
        <StyledBlog>
          <StyledBlogImgLeft>
            <Image
              src="https://i.ibb.co/X803vjg/caleb-mullins-Nwp39h-Za1-Q0-unsplash.jpg"
              alt="Blog image"
              height={75}
            />
          </StyledBlogImgLeft>
          <StyledBlogContentRight>
            <h4>Lorem ipsum dolor sit amet, consectetur</h4>
            <p>Blog</p>
          </StyledBlogContentRight>
        </StyledBlog>
        <StyledBlog>
          <StyledBlogImgLeft>
            <Image
              src="https://i.ibb.co/9rZpVfq/jose-francisco-morales-h-Kzm-Ps8-Axh8-unsplash.jpg"
              alt="Blog image"
              height={75}
            />
          </StyledBlogImgLeft>
          <StyledBlogContentRight>
            <h4>Lorem ipsum dolor sit amet, adipisicing</h4>
            <p>Blog</p>
          </StyledBlogContentRight>
        </StyledBlog>
        <StyledBlog>
          <StyledBlogImgLeft>
            <Image
              src="https://i.ibb.co/9tcDjHM/2288x1287-blogheader-cat-family.jpg"
              alt="Blog image"
              height={75}
            />
          </StyledBlogImgLeft>
          <StyledBlogContentRight>
            <h4>Lorem ipsum dolor sit, consectetur adipisicing</h4>
            <p>Blog</p>
          </StyledBlogContentRight>
        </StyledBlog>
        <StyledBlog>
          <StyledBlogImgLeft>
            <Image
              src="https://i.ibb.co/HGNRQTn/benjamin-hershey-qeg-Sxv-H9-U9-Y-unsplash.jpg"
              alt="Blog image"
              height={75}
            />
          </StyledBlogImgLeft>
          <StyledBlogContentRight>
            <h4>Lorem ipsum dolor sit, consectetur adipisicing</h4>
            <p>Blog</p>
          </StyledBlogContentRight>
        </StyledBlog>
      </StyledAllBlogs>
      <StyledCustomButton style={{ marginTop: "24px", marginBottom: "32px" }}>
        Disclaimer
      </StyledCustomButton>
      <StyledNote>
        <span style={{ fontWeight: "bold" }}>Important:</span> The information
        on this site is not intended to be an effective substitute for
        professional medical care and treatment. The results shown here may
        vary.
      </StyledNote>
    </Box>
  );
};

export default RightSide;
