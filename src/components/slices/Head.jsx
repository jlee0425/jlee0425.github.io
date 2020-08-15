import React from 'react'
import styled from 'styled-components'

import IconLink from '../iconLink'

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const SummaryBox = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
`
const SubHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`
const Summary = styled.div``
const CustomLink = styled.a`
  padding: 0 3px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 0.9rem;
  text-align: center;
  background: rgb(30, 43, 49);
  color: white;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`

const Head = ({ title, date, summary, git, link, preview }) => {
  return (
    <HeadContainer>
      <SummaryBox>
        <HeaderTitle>{title}</HeaderTitle>
        <hr />
        <SubHead>
          {date}
          <Links>
            {link && <CustomLink url={link}>DEMO</CustomLink>}
            <IconLink git url={git} />
          </Links>
        </SubHead>
        <Summary>{summary}</Summary>
      </SummaryBox>
      {/* <img src={preview.url} /> */}
    </HeadContainer>
  )
}

export default Head
