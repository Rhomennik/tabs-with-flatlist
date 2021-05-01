import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import Tabs from "./src/Tabs";
import TabsContent from "./src/TabsContent";

const Component1 = () => <Text>COMPONENTE = 0</Text>;
const Component2 = () => <Text>COMPONENTE = 1</Text>;
const Component3 = () => <Text>COMPONENTE = 2</Text>;
const Component4 = () => <Text>COMPONENTE = 3</Text>;

const data = [
  { id: "0", title: "Servicios", Component: Component1 },
  { id: "1", title: "Opiniones", Component: Component2 },
  { id: "2", title: "Portafolio", Component: Component3 },
  { id: "3", title: "Detalles", Component: Component4 },
];

const App = () => {
  const [tab, setTab] = useState({ id: 0, title: "Search" });

  const ref = {
    tabContent: useRef(null),
  };

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewRef = useRef((event) => {
    const viewableItems = event.changed[0];

    if (viewableItems.isViewable) {
      setTab({ id: viewableItems.item.id, title: viewableItems.item.title });
    }
  });

  return (
    <View style={styles.container}>
      <View>
        <Tabs
          data={data}
          tab={tab}
          setTab={(id, title) => {
            setTab({ id, title });
            if (ref.tabContent.current) {
              ref.tabContent.current.scrollToIndex({
                animated: true,
                index: id,
              });
            }
          }}
        />
      </View>

      <TabsContent
        data={data}
        tabContent={ref.tabContent}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,

    backgroundColor: "#222f3e",
  },
});

export default App;
