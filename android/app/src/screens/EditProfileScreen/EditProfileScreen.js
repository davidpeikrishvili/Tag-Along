/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React, {useState} from 'react';
 import {StyleSheet, Text, View, Button} from 'react-native';
 import CheckBox from '@react-native-community/checkbox';

 
 
 export default function EditProfileScreen() {
   const [marvelvalue, setMarvelValue] = useState(false);
   const [DCvalue, setDCValue] = useState(false);
 
   return (
   
     <View>
   <Text>{`[MarvelFan: ${marvelvalue}]`}</Text>
        <CheckBox value={marvelvalue} onValueChange={(val) => setMarvelValue(val)} />
        <Button
          onPress={() => setMarvelValue(!marvelvalue)}
          title="toggle the value above"
        />

   <Text>{`[DCFan: ${DCvalue}]`}</Text>
        <CheckBox value={DCvalue} onValueChange={(val) => setDCValue(val)} />
        <Button
          onPress={() => setDCValue(!DCvalue)}
          title="toggle the value above"
        />
     </View>
     
   );
 }
 
 const styles = StyleSheet.create({
   textInput: {
     borderColor: 'gray',
     borderWidth: 1,
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   marvel:{

   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
  
 });