import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function AppBar(props) {
  return (
    <View style={styles.appBar}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        {props.titulo}
      </Text>
    </View>
  );
}

function App() {
  return (
    <View >
      <AppBar titulo="Minha Aplicação React Native" />
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    height: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    paddingLeft: 16,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#fff" },
});

export default App;