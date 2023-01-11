import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  if (value >= 1000) {
    return Math.round(value / 100) + "k";
  } else return value.toString();
};

const RepositoryStats = ({ stats }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stats.forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stats.stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stats.ratingAverage)}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {" "}
          {parseThousands(stats.reviewCount)}
        </StyledText>
        <StyledText align="center">Review</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
