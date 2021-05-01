import React, { useCallback } from "react";

import { ContainerItem, FlatList } from "./styles";

const Item = ({ item: { id, Component } }) => {
  return (
    <ContainerItem style={{ backgroundColor: "#f1f2f6" }}>
      <Component />
    </ContainerItem>
  );
};

const TabsContent = ({
  onViewableItemsChanged,
  viewabilityConfig,
  tabContent,
  data,
}) => {
  return (
    <FlatList
      ref={tabContent}
      data={data}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      horizontal={true}
      keyExtractor={({ id }) => id}
      renderItem={(props) => <Item {...props} />}
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      bounces={0}
    />
  );
};

export default TabsContent;
