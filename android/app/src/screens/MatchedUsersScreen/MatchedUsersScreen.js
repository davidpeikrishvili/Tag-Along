import React, {useState, useEffect} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Logo from '../../../../../assets/images/Tag_Along.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api"

//const{height} = useWindowDimensions();

const MatchedUsersScreen = () => {
  const [username, setUsername] = useState('NewUser123');
  const [matches, setMatches] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState({});
  const [matchedUsername, setMatchedUsername] = useState('NewUser123');
  const [matched, setMatched] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    timer = setInterval(() => GetMatches(), 2000)
  },[])

  const GetMatches = () => {
    if (!matched){
      secondGet = false, thirdGet = false;
      fetch(`${url}/matches/${username}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
    
        .then((response) => response.json())
        .then(data => {
            setMatches(data['matches']);
        })
        .then(secondGet = true)
        .catch((error) => {
            console.error(error);
        });
      
        if (secondGet) {
          console.log("Username: ",username);
          fetch(`${url}/${username}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
        
            .then((response) => response.json())
            .then(data => {
                setUserData(data);
                setMatchedUsername(data['MatchedUser']);
                console.log("Matched user: ",data['MatchedUser']);
            })
            .then((username !== matchedUsername) ? thirdGet=true:thirdGet=false)
            .catch((error) => {
                console.error(error);
            });
        }
        
        if (thirdGet) {
          console.log("You shouldn't be here.");
          fetch(`${url}/${matchedUsername}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
          })
        
            .then((response) => response.json())
            .then(data => {
                if (data['MatchedUser'] === username)
                  setMatched(true);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }
    
  }

  const onMatchPress = (name) => {
    console.log("MatchPress: ",username, name);
    profile = userData;
    profile["MatchedUser"] = name;
      fetch(`${url}/update/${username}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      })

        .then((response) => response.json())
        
        .then(data => {
            if (!data['detail']) {
                console.log(data);
                //this.props.navigation.navigate("Matches", {username: this.state.username});
            }
            else {
                console.log(data['detail']);
            }
        })
        
        .catch((error) => {
            console.error(error);
        })
  }

  if (matched)
      return (<View>
        <Text>Matches</Text>
        <Text>You have matched with {matchedUsername}!</Text>
        </View>);
  else {
    return matches.map((user, index) =>{
      console.log("Checking match: ",user, matchedUsername);
      if (user === matchedUsername)
        return(<View key = {index}>
          <Text>{user}</Text>
          <CustomButton text={"Waiting..."} style={{color:'gray'}} />
        </View>)
      else
          return(<View key = {index}>
            <Text>{user}</Text>
            <CustomButton text={"Match!"} style={{color:'red'}} onPress={() => onMatchPress(user)} />
          </View>)
    })
  }
  
}

/*
const MatchedUsersScreen = () => {
  return (
    <View>
      <Text>MatchedUsersScreen</Text>
    </View>
  )
}
*/

export default MatchedUsersScreen