import React from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { Text } from "react-native";
export default function App() {
  return (
    <NativeRouter>
      <Main />
      <Text style={{ paddingTop: 80 }}>Holi</Text>
    </NativeRouter>
  );
}
