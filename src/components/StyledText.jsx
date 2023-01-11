import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.base,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textAlignCenter,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default StyledText;
