import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props){
  return(
<View>
  <Text style={styles.titulo}> As Melhores Receitas de Bolo</Text>
<Image source={require('../assets/bolo-principal.jpg')} style={styles.img} />

<TouchableOpacity onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
  <Text style={styles.lista}>Bolo de Chocolate</Text>
</TouchableOpacity>

<TouchableOpacity onPress= {()=> {props.navigation.navigate('BoloFuba')}}>
  <Text style={styles.lista}>Bolo de fubá</Text>
</TouchableOpacity>

<TouchableOpacity onPress= {()=> {props.navigation.navigate('BoloMilho')}}>
  <Text style={styles.lista}>Bolo de Milho</Text>
</TouchableOpacity>

</View>

  );
}

const styles = StyleSheet.create({
img :
{
  margin: 15,
  borderRadius: 10,
  width: '90%',
  height: '70%', 
},
titulo:
{
  fontWeight:'bold',
  fontSize: 25,
  margin: 15,
},
lista: 
{
  fontWeight:'bold',
  fontSize: 15,
  padding: 5,
  textAlign:'center'
}
});

