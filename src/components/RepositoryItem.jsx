import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({ repo }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      <StyledText fontSize="subheading" fontWeight="bold">
        {repo.fullName}
      </StyledText>
      <StyledText>{repo.description}</StyledText>
      <StyledText style={styles.language}>{repo.language}</StyledText>
    </View>
  );
};
const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader repo={repo} />
      <RepositoryStats stats={repo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
