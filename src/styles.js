import styled from "styled-components/native";

import { Dimensions } from "react-native";
import {
  TouchableHighlight,
  FlatList as FlatListNative,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

// Tabs
export const Item = styled(TouchableHighlight)`
  padding-left: 10px;
`;

export const TextItem = styled.Text`
  padding: 10px;
  color: ${({ selected }) => (selected ? "#10ac84" : "#7f8fa6")};
`;

// TabsContent
export const FlatList = styled(FlatListNative).attrs({
  snapToInterval: WIDTH,
  decelerationRate: 0,
})``;

export const ContainerItem = styled.View`
  width: ${WIDTH + "px"};
`;
