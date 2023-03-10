import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    marginTop: 25,
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
  },
  wrapp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 5,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
    color: "#fff",
    fontWeight: "regular",
  },
  completed: {
    fontSize: 16,
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
