import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloChocolate(){
  return(
<View>
  <Text style={styles.titulo}> Bolo de Chocolate</Text>
<Image source={require('../assets/bolo-chocolate.jpg')} style={styles.img} />
</View>
  );
};

const styles = StyleSheet.create({
img :
{
  margin: 40,
  borderRadius: 10,
  width: '80%',
  height:'60%', 
},
titulo:
{
  fontWeight:'bold',
  fontSize: 25,
  margin: 15,
  textAlign:'center'
}
});