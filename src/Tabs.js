import React from "react";

import { FlatList } from "react-native-gesture-handler";
import { Item, TextItem } from "./styles";

const TabItem = ({ item: { id, title }, tab, setTab }) => {
  return (
    <Item
      onPress={() => {
        setTab(id, title);
      }}
      underlayColor="#00000"
    >
      <TextItem selected={title === tab.title}>{title}</TextItem>
    </Item>
  );
};

const Tabs = ({ data, tab, setTab }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      horizontal={true}
      bounces={false}
      renderItem={(props) => (
        <TabItem
          {...props}
          tab={tab}
          setTab={(id, title) => setTab(id, title)}
        />
      )}
    />
  );
};

export default Tabs;
