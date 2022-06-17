import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetailData] = useState({});
  console.log(id);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("doc does no exist");
        }
      })
      .catch((err) => {
        console.log("error getting doc", err);
      });
    console.log(detail);
  }, [id]);

  return (
    <Component>
      <Background>
        <img alt="" src={detail.backgroundImg} />
      </Background>
      <ImgTitle>
        <img alt="" src={detail.titleImg} />
      </ImgTitle>
      <ContentMeta>
        <Controls>
          <PlayControl>
            <img alt="" src="/images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayControl>
          <TrailerControl>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </TrailerControl>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupList>
            <div>
              <img alt="" src="/images/group-icon.png" />
            </div>
          </GroupList>
        </Controls>
        <Subtitle>{detail.subTitle}</Subtitle>
        <Description>{detail.description}</Description>
      </ContentMeta>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  min-height: calc(100%-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(2.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTitle = styled.div`
display:flex;
align-items: flex-end;
justify-content: flex-start;
--webkit-box-pack:start
margin:0px auto;
height:28vw;
min-height:156px;
width:100%;

img{
    max-width:580px;
    min-width:200px;
    width:35vw;
}
`;

const ContentMeta = styled.div`
  max-width: 880px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0px;
  min-height: 60px;
`;

const PlayControl = styled.button`
  font-size: 14px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.9px;
  background-color: rgb(247, 247, 247);
  border: none;
  color: black;
  cursor: pointer;

  img {
    width: 30px;
  }
  &:hover {
    background-color: rgb(195, 195, 195);
  }

  @media (max-width: 768px) {
    height: 48px;
    padding: 0;
    font-size: 12px;
    margin: 0 10 0 0;

    img {
      width: 25px;
    }
  }
`;

const TrailerControl = styled(PlayControl)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  div {
    height: 40px;
    width: 40px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 19px;
  min-height: 25px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  line-height: 1.5;
  font-size: 16px;
  padding: 15px 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default Details;
