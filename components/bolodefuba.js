import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloFuba(){
  return(
<View>
  <Text style={styles.titulo}> Bolo de Fubá</Text>
<Image source={require('../assets/bolo-fuba.jpg')} style={styles.img} />
</View>
  );
}

const styles = StyleSheet.create({
img :
{
  margin: 40,
  borderRadius: 10,
  width: '80%',
  height:'60%', 
  alignItems:'center'
},
titulo:
{
  fontWeight:'bold',
  fontSize: 25,
  margin: 15,
  textAlign:'center'
}
});