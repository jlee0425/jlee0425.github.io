import styled from 'styled-components'

export const SliceContainer = styled.section`
  margin-top: 0rem;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const Content = styled.div`
  padding: 0 8rem;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`
export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
`
export const ImgSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`
export const StyledImg = styled.img`
  width: 90%;
  max-width: 360px;
  height: auto;
  border: 1px solid grey;
  @media (max-width: 769px) {
    width: 100%;
  }
`
export const Separator = styled.div`
  margin: 2rem;
  height: 1px;
  background: lightgrey;
`
export const Paragraph = styled.p``
export const AltText = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-weight: 300;
  font-style: italic;
  color: #a8a8a8;
  text-align: center;
`
