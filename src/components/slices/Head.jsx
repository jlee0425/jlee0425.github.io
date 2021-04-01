import React from "react";
import styled from "styled-components";

import { IconLink } from "../Links";

const Head = ({ title, date, summary, git, link, preview }) => {
  return (
    <HeadContainer>
      <SummaryBox>
        <HeaderTitle>{title}</HeaderTitle>
        <hr />
        <SubHead>
          <Links>
            {link && <CustomLink href={link}>DEMO</CustomLink>}
            <IconLink git url={git} />
          </Links>
          {date}
        </SubHead>
        <Summary>{summary}</Summary>
      </SummaryBox>
      <ImgContainer>
        <StyledImg
          src={preview.url}
          width={preview.dimensions.width}
          height={preview.dimensions.height}
        />
      </ImgContainer>
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;
const SummaryBox = styled.div`
  width: 50%;
  margin-right: 3rem;
  @media (max-width: 1025px) {
    width: 100%;
    margin-right: 0;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1 1rem;
  height: 80%;
  @media (max-width: 1025px) {
    height: 100%;
  }
`;
const StyledImg = styled.img`
  margin: 2rem 0;
  max-height: 360px;
  width: auto;
`;
const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
`;
const SubHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const Summary = styled.div``;
const CustomLink = styled.a`
  padding: 0 3px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 0.9rem;
  text-align: center;
  background: rgb(30, 43, 49);
  color: white;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5rem;
`;

export default Head;
