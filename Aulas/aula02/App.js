import { useState } from "react";
import { Text, Button, StyleSheet } from "react-native";

function Titulo(props) {
  return <Text>{props.children}</Text>
}

function App(){

  const [estado, setEstado] = useState(0);
  
  return( 
  <>
    <Titulo>Meu App</Titulo>
    <Text style={style.titulo}>Ola Pessoal!</Text>
    <Text style={style.titulo}>{estado}</Text>
    <Button title="Clique" onPress={() => setEstado(estado + 1)}/>
  </>

  
  );
}

const style = StyleSheet.create({
  titulo:{
    fontSize: 24,
    paddingTop: 24,
  }
})

export default App;