import React from "react";
import { FaGithubAlt, FaChrome } from "react-icons/fa";
import styled from "styled-components/macro";

export default function Box({
  img,
  title,
  frontEnd,
  backBnd,
  dataBase,
  cssFramework,
  host,
  repo,
  website,
}) {
  return (
    <Container className="mb-4">
      <Cover img={img}>
        <UL>
          {repo ? (
            <LI>
              <BtnRepo href={repo} target="_blank" rel="noopener noreferrer">
                <FaGithubAlt style={{ marginRight: 5 }} />
                Github
              </BtnRepo>
            </LI>
          ) : null}
          {website ? (
            <LI>
              <BtnWebsite
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaChrome style={{ marginRight: 5 }} />
                Demo
              </BtnWebsite>
            </LI>
          ) : null}
        </UL>
      </Cover>
      <Info>
        {title ? <h5>{title}</h5> : null}
        {frontEnd ? <Span>Front-End : {frontEnd}</Span> : null}
        {backBnd ? <Span>Back-End : {backBnd}</Span> : null}
        {dataBase ? <Span>Database : {dataBase}</Span> : null}
        {cssFramework ? <Span>CSS : {cssFramework}</Span> : null}
        {host ? <Span>Host : {host}</Span> : null}
      </Info>
    </Container>
  );
}

const Cover = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding-top: 56.25%;
  border: 5px solid #34495e;
  border-radius: 18px;
  position: relative;
  width: 100%;
`;

const UL = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  background-color: #34495eda;
  opacity: 0;
  transition: all 0.2s ease-in;
`;

const LI = styled.li``;

const BtnRepo = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background-color: #2c3e50;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 18px;
  transform: scale(0.7);
  transition: all 0.3s cubic-bezier(0.5, 1.5, 1, 1.2);
  &:hover {
    text-decoration: none;
    color: white;
    background-color: #8e44ad;
  }
`;

const BtnWebsite = styled(BtnRepo)`
  &:hover {
    background-color: #2980b9;
  }
`;

const Info = styled.div`
  background-color: #34495e;
  width: 90%;
  height: 200px;
  padding: 40px 0px 15px 0px;
  margin: -20px auto 20px auto;
  border-radius: 16px;
  text-align: center;
`;

const Container = styled.div`
  &:hover ${UL} {
    opacity: 1;
  }
  &:hover ${BtnRepo} {
    transform: scale(1);
  }
`;

const Span = styled.span`
  display: block;
  font-size: 14px;
`;
