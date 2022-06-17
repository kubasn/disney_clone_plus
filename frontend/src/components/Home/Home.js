import React from "react";
import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recommends from "../Recommends/Recommends";
import Trending from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../features/movies/movieSlice";
import { selectUserName } from "../../features/users/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let originals = []; //
  let trending = [];
  let newDisneys = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data().type);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      console.log(newDisneys);
      dispatch(
        setMovies({
          recommend: recommends,
          newDisneys,
          original: originals,
          trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

//inset skrot odpowiadajacy top right bottom,left - mozemy uzywac wiele wartosci jak przy margin
//overflow-x - jak ma się zachować strona gdy elementy na niej się nie mieszczą
