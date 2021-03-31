import React from "react";
import styled from "styled-components";

import { Seo } from "../components";
import { IconLink } from "../components/Links";
import links from "../data/links.json";

const ResumeContainer = styled.div`
  display: grid;
  padding: 75px 10vw;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "Head Head"
    "About About"
    "Projects Skills"
    "Projects Extra-Curricular"
    "Education Education"
    "Experience Experience";

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  background: linear-gradient(270deg, #29323c, #485563);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  h1 {
    margin: 0;
    font-size: 3rem;
  }
  span {
    margin: 15px;
    font-size: 1.2rem;
  }
`;
const GridItem = styled.section`
  box-shadow: 2px 2px 7px #c5c4c4;
  border-radius: 5px;
  padding: 10px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.small || "bold"};
  font-size: ${props => (props.small ? "1.2rem" : "1.5rem")};
  margin-top: ${props => props.small && "15px"};
  margin-bottom: 3px;
`;
const SubHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: grey;
`;
const Body = styled.section`
  font-size: 0.9rem;
  color: #2f3030;
  ul {
    padding-left: 20px;
  }
  * {
    margin-top: 5px;
  }
`;
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
  font-size: 1.2rem;
  & > * {
    margin: 0 0.7rem;
  }
`;
const H3 = styled.h3`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 1rem;
`;
const Resume = ({ location }) => {
  const link = links.slice(1);
  return (
    <>
      <Seo title="Resume" />
      <ResumeContainer>
        <Head style={{ gridArea: "Head" }}>
          <h1 style={{ marginBottom: "1rem" }}>Jake Lee</h1>
          <Links>
            {link.map((icon, index) => (
              <IconLink
                type={icon.type}
                url={icon.url}
                title={icon.title}
                key={index}
              />
            ))}
          </Links>
        </Head>
        <GridItem style={{ gridArea: "About" }}>
          <Title>I am</Title>
          <Body>
            <p>
              <strong>An enthusiastic react developer.</strong> I am excited
              about tackling difficult problems, boosting performance, and
              improving user-experiences of an app. I always look for an
              opportunity to learn new things. In my free time, I build and
              maintain side projects to learn new skills and technologies.
            </p>
            <p>
              <strong>A photograph hobbyist.</strong> I have been fascinated
              with photography since I first saw a long-exposure shot that my
              friend took on a first overseas trip together. Thanks to him, I
              started my hobby as a photographer, which led to a part-time job
              at a well-known studio in Korea. Since I came to Canada, I like to
              go on camping trips and photograph beautiful sceneries of British
              Columbia.
            </p>
          </Body>
        </GridItem>
        <GridItem style={{ gridArea: "Projects" }}>
          <Title>Projects</Title>
          <Title small>
            Sorting Visualizer
            <Links>
              <CustomLink href="https://quirky-swirles-9080c2.netlify.app/">
                LIVE
              </CustomLink>
              <IconLink
                type="git"
                url="https://github.com/jlee0425/Sorting-Visualizer"
              />
            </Links>
          </Title>
          <SubHead>
            A live single-page web app for sorting algorithms visualization.
          </SubHead>
          <Body>
            <ul>
              <li>
                Implemented and tested five standard sorting algorithms: Bubble,
                Insertion, Heap, Merge, and Quick
              </li>
              <li>Built size and speed sliders for better user experience.</li>
              <li>
                Implemented a swap animation to visualize how each sorting
                algorithm progresses.
              </li>
            </ul>
          </Body>
          <Title small>
            Movie Browser
            <Links>
              <CustomLink href="https://youtu.be/wGMgR8q_aRs">DEMO</CustomLink>
              <IconLink
                type="git"
                url="https://github.com/jlee0425/Movie_Browser"
              />
            </Links>
          </Title>
          <SubHead>
            A mobile app that keeps track of latest box-office movies and the
            user’s favorite movies.
          </SubHead>
          <Body>
            <ul>
              <li>
                Implemented stack navigator and tab navigator for better user
                experience.
              </li>
              <li>
                Utilized Redux and Persistor to store the user’s favorite movies
                even when the user closes the app.
              </li>
              <li>
                Designed the cards and list to visualize movie information.
              </li>
              <li>
                Implemented Async calls using axios to fetch and process movie
                data from an open-source Movie database.
              </li>
            </ul>
          </Body>
          <Title small>
            COVID-19 Tracker
            <Links>
              <CustomLink href="https://blissful-saha-fa57eb.netlify.app/">
                LIVE
              </CustomLink>
              <IconLink
                type="git"
                url="https://github.com/jlee0425/covid-19-tracker"
              />
            </Links>
          </Title>
          <SubHead>
            A live single-page web app for Novel COVID-19 Database.
          </SubHead>
          <Body>
            <ul>
              <li>
                Implemented Async calls using axios to fetch and process various
                data from an open-source COVID-19 API.
              </li>
              <li>Built components that handle different data individually.</li>
              <li>
                Visualized data in most effective ways using recharts and a
                table.
              </li>
            </ul>
          </Body>
        </GridItem>
        <GridItem style={{ gridArea: "Extra-Curricular" }}>
          <Title>Extra-curricular</Title>
          <Title small>CS50: Mobile App Development with React Native</Title>
          <SubHead>
            HarvardX{" "}
            <CustomLink href="https://courses.edx.org/certificates/3e32c0e899c34f95a884c8e1f7c66d62">
              Certificate
            </CustomLink>
          </SubHead>
          <Body>
            <p>
              Learned and built a few apps using{" "}
              <strong>React, React Native, Expo, and Redux</strong>.
            </p>
          </Body>
          <Title small>CS50: Introduction to Computer Science</Title>
          <SubHead>
            HarvardX
            <CustomLink href="https://courses.edx.org/certificates/aa35b41d2eb843579465836749a0f3f7">
              Certificate
            </CustomLink>
          </SubHead>
          <Body>
            <p>
              Reviewed basic programming, algorithms(<strong>C</strong>), and
              database(<strong>SQLite</strong>).
            </p>
          </Body>
          <Title small>Advanced C++</Title>
          <SubHead>
            Microsoft{" "}
            <CustomLink href="https://courses.edx.org/certificates/75582221e3d0474ab6fb931d0df47956">
              Certificate
            </CustomLink>
          </SubHead>
          <Body>
            <p>
              Learned exceptions, templates, iterators, patterns, and new
              features such as smart-pointer.
            </p>
          </Body>
        </GridItem>
        <GridItem style={{ gridArea: "Skills" }}>
          <Title>Skills</Title>
          <H3>Frontend</H3>
          <Body> - React, Redux, HTML, CSS, JS, ReactNative</Body>
          <H3>Backend</H3>
          <Body> - Python Flask, Firebase, Node</Body>
          <H3>Others</H3>
          <Body> - C++, C, Java, Python, Serverless CMS, Oracle SQL, SQLite, Bash, Git, Lightroom</Body>
        </GridItem>
        <GridItem style={{ gridArea: "Education" }}>
          <Title>Education</Title>
          <Title small>
            Langara College - Associate of Science: Science General
          </Title>
          <SubHead>May 2017 - Dec 2019 (Dean's Honour Roll)</SubHead>
        </GridItem>
        <GridItem style={{ gridArea: "Experience" }}>
          <Title>Experience</Title>
          <Title small>Gyukaku Broadway - Server</Title>
          <SubHead>Oct 2015 - Oct 2018, Vancouver. BC</SubHead>
          <Body>
            <ul>
              <li>
                Prioritized tasks and distributed them according to each staff’s
                capability.
              </li>
              <li>
                Trained new people in a way that they would feel welcomed and
                get used to working in a fast-paced environment.
              </li>
            </ul>
          </Body>
          <Title small>CATCH122 - Busser</Title>
          <SubHead>Aug 2015 - Apr 2016, Vancouver, BC.</SubHead>
          <Body>
            <ul>
              <li>
                Worked in a fast-paced restaurant while maintaining high
                customer satisfaction and efficiency
              </li>
            </ul>
          </Body>
          <Title small>Migaro Studio - Assistant Photographer</Title>
          <SubHead>Mar 2014 - Apr 2015, Seoul, South Korea.</SubHead>
          <Body>
            <ul>
              <li>
                Photographed brides and grooms in various environments such as a
                wedding studio, wedding halls, beauty salons and outside.
              </li>
              <li>
                Used and placed various lightings for different shots in a photo
                studio for a wedding, family and etc.
              </li>
              <li>Editing photo using Adobe Lightroom and Adobe Photoshop.</li>
            </ul>
          </Body>
        </GridItem>
      </ResumeContainer>
    </>
  );
};

export default Resume;
