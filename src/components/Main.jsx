import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route, Redirect } from "react-router-native";
import { Text } from "react-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route
          path="/signin"
          exact
          element={<Text>Sign In - workin on in</Text>}
        />
      </Routes>
    </View>
  );
};

export default Main;
