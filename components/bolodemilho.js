import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloMilho(){
  return(
<View>
  <Text style={styles.titulo}>Bolo de Milho </Text>
<Image source={require('../assets/bolo-milho.jpg')} style={styles.img} />
</View>
  );
}

const styles = StyleSheet.create({
img :
{
    margin: 30,
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
},
});