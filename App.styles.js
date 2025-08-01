// App.styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  // diğer tüm style objelerini buraya eklemelisin:
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardLabel: {
    fontSize: 18,
    marginTop: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  choiceButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 6,
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  explanationBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  nextButton: {
    marginTop: 12,
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
