import { View, Text, StyleSheet } from "react-native";

function PerfilScreen() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.perfilSection}>
        <View style={styles.photo}></View>
        <View style={styles.perfilData}>
          <Text>Julinho Delas</Text>
          <Text>COMEDOR DE CASADAS </Text>
        </View>
      </View>
      <View>
        <Text>Habilidades</Text>
        <View style= {styles.skills}>
          <Text>JS</Text>
          <Text>React</Text>
          <Text>React Native</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  perfilSection: {
    flexDirection: "row",
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 48,
    backgroundColor: "lightgray",
  },
  conteiner:{
    flex: 1,
    padding: 16
  },
  perfilData:{
    padding: 16,
    justifyContent: "center"
  },
  skills: {
    flexDirection: "row",
    padding: 8,
    gap: 8
  }
});

export default PerfilScreen;
