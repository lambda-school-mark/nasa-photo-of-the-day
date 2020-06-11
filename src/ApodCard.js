import React from "react";
import styled from "styled-components";

const CardCenter = styled.div`
  margin: 100px auto;
  width: 800px;
  border: 1px solid gray;
  border-radius: 14px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`;

const Paragraph = styled.p`
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: #dee2e6;
`;

const ApodCard = ({ info }) => (
  <CardCenter>
    <ImageContainer>
      <Image alt="" src={info.hdurl}></Image>
      <Paragraph>{info.copyright}</Paragraph>
    </ImageContainer>
    <div className="card-info">
      <h1> {info.title}</h1>
      <p> {info.explanation}</p>
      <p> Date: {info.date}</p>
    </div>
  </CardCenter>
);

export default ApodCard;
