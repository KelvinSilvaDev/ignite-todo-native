import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  counter: {
    textAlign: "center",
    margin: 10,
    flexDirection: "row",
  },

  counterText: {
    fontSize: 20,
    color: "#4EA8DE",
    textAlign: "center",
    margin: 10,
  },
  counterDone: {
    fontSize: 20,
    color: "#8284FA",
    textAlign: "center",
    margin: 10,
  },
  count: {
    fontSize: 20,
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    margin: 5,
  },
  countWrapp: {
    backgroundColor: "#3d3d3d",
    borderRadius: 10,
  },
});
