import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },

  logoBlue: {
    color: "#2563eb",
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreSection: {
    alignItems: "center",
    marginVertical: 20,
  },

  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 8,
    borderColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreNumber: {
    fontSize: 36,
    fontWeight: "800",
  },

  scoreText: {
    fontSize: 12,
    color: "#6b7280",
  },

  mainTitle: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 18,
    borderRadius: 16,
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
  },

  text: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 6,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#6b7280",
  },

  activeNav: {
    fontSize: 11,
    color: "#2563eb",
    fontWeight: "700",
  },
});