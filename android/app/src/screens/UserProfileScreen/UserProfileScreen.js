import React, {useState} from 'react';
import World from '../../../../../assets/images/world.png';
import Settings from '../../../../../assets/images/Settings.png';
import Friend from '../../../../../assets/images/Friend.png';
import Logout from '../../../../../assets/images/logout.png';
import { View, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UserProfileScreen = () => {


const navigation = useNavigation();

const worldPressed = () => {
  //Enables user upon button press to traverse to Create an account screen
navigation.navigate('Map');
};
const settingsPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
  navigation.navigate('Map');
  };

const friendPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
  navigation.navigate('Friend');
  };

  const logoutPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
  navigation.navigate('SignIn');
  };
  
  return (
    <ImageBackground source ={require('./../../../../../assets/images/UserProfile.png')} style ={styles.screen}>
    <View style={styles.root}>

    <TouchableWithoutFeedback
        onPress={worldPressed}>
      <Image 
      source={World} 

      style={[styles.world]}
      resizeMode="contain" 
      />
  </TouchableWithoutFeedback>

       <TouchableWithoutFeedback
        onPress={settingsPressed}>
      <Image 
      source={Settings} 
      style={[styles.Settings]}
      resizeMode="contain" 
      />
   </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={friendPressed}>
      <Image 
      source={Friend} 
      style={[styles.Friend]}
      resizeMode="contain" 
      />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={logoutPressed}>
      <Image 
      source={Logout} 
      style={[styles.logout]}
      resizeMode="contain" 
      />
      </TouchableWithoutFeedback>

      
      
    
    </View>
</ImageBackground>
  );
};

//Allows user to Customize visual elements of the signin Screen
const styles = StyleSheet.create({
  world: {
    maxHeight:75,
    right:-125,
    bottom: -655,
 },
 Settings:{
  maxWidth: 75,
    right: -300,
    bottom: -575,
 },
Friend:{
  maxWidth: 100,
  bottom: -333
},
logout:{
maxWidth: 90,
top:-680,
right:-300
},
screen:{
  width: '100%',
  height:'100%',
},
});

export default UserProfileScreen; 

