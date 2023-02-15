import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        Repositories
      </AppBarTab>
      <AppBarTab active to="/signin">
        Sign In
      </AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;
