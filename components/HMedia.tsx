import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Movie, TV } from "../api";
import Poster from "./Poster";
interface HMediaProps {
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: string;
  fullData: Movie;
}

const HMedia: React.FC<HMediaProps> = ({
  poster_path,
  original_title,
  release_date,
  overview,
  fullData,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        ...fullData,
      },
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <HMovie>
        <Poster path={poster_path} />
        <HColumn>
          <Title>{original_title}</Title>
          <Release>
            {new Date(release_date).toLocaleDateString("ko", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Release>
          <Overview>
            {overview.length > 140 ? `${overview.slice(0, 140)} ...` : overview}
            {overview === "" ? `Coming Soon` : null}
          </Overview>
        </HColumn>
      </HMovie>
    </TouchableOpacity>
  );
};

const HMovie = styled.View`
  padding: 5px 20px;
  flex-direction: row;
`;
const HColumn = styled.View`
  margin-left: 15px;
  width: 80%;
`;
const Overview = styled.Text`
  color: white;
  width: 80%;
`;
const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 10px;
`;
const Title = styled.Text`
  color: white;
  width: 100px;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

export default HMedia;
