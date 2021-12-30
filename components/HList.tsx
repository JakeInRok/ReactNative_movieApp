import React from "react";
import { Alert, FlatList } from "react-native";
import styled from "styled-components/native";
import VMedia from "./VMedia";

interface HListProps {
  title: string;
  data: any[];
  hasNextPages: boolean;
}

export const HListSeparator = styled.View`
  width: 10;
`;

const ListContainer = styled.View`
  margin-bottom: 20px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;
const HList: React.FC<HListProps> = ({
  title,
  data,
  hasNextPages,
  renderPages,
}) => {
  const loadMore = () => {
    if (hasNextPages) {
      renderPages();
    }
  };
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <FlatList
        onEndReached={loadMore}
        data={data}
        horizontal
        keyExtractor={(item) => item.id + ""}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={HListSeparator}
        renderItem={({ item }) => (
          <VMedia
            poster_path={item.poster_path}
            original_title={item.original_title ?? item.original_name}
            vote_average={item.vote_average}
            fullData={item}
          />
        )}
      />
    </ListContainer>
  );
};

export default HList;
