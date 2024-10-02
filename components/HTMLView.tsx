import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HTMLView from "react-native-htmlview";

interface PROPS {
  html: any;
}
const HTMLRenderView = (props: PROPS) => {
  return (
    <View style={styles.container}>
      <HTMLView value={props.html || ""} style={styles.bubble} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start", // Align to the left for WhatsApp style
    paddingHorizontal: 10,
  },
  bubble: {
    backgroundColor: "#a5eaea", // Light green similar to WhatsApp
    borderRadius: 10,
    padding: 10,
    maxWidth: "95%", // Adjust as needed
    position: "relative",
  },
});
export default HTMLRenderView;
