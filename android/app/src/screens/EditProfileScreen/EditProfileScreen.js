import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert,Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';


export default function EditProfileScreen() {

  const [ambitiousTimesPressed, setambitiousTimesPressed] = useState(0);


  //Here, the amount of times the interest button is pressed, is tracked
  let textLog = '';
  if (ambitiousTimesPressed < 4 ) {
    textLog = ambitiousTimesPressed + 'x interested';
  }
  if (ambitiousTimesPressed == 1){
   textLog = 'Somewhat Interested';
  }
  if (ambitiousTimesPressed == 2){
   textLog = ' Interested';
  }
  if (ambitiousTimesPressed == 3) {
   textLog = 'Very Interested';
  }else if (ambitiousTimesPressed == 4){
    ambitiousTimesPressed % 0;
  }


  
  const [marvelValue, setMarvelValue] = useState(false);
  const [DCValue, setDCValue] = useState(false);
  const [GamerValue, setGamerValue] = useState(false);
  const [FoodieValue, setFoodieValue] = useState(false);
  const [GymRatValue, setGymRatValue] = useState(false);
  const [AnimeFanValue, setAnimeFanValue] = useState(false);
  const [ArtLoverValue, setArtLoverValue] = useState(false);
  const [FilmBuffValue, setFilmBuffValue] = useState(false);
  const [HomebodyValue, setHomebodyValue] = useState(false);
  const [NightOwlValue, setNightOwlValue] = useState(false);
  const [AmbitiousValue, setAmbitiousValue] = useState(false);
  const [CatPersonValue, setCatPersonValue] = useState(false);
  const [DogPersonValue, setDogPersonValue] = useState(false);
  const [EasyGoingValue, setEasyGoingValue] = useState(false);
  const [BeatlesFanValue, setBeatlesFanValue] = useState(false);
  const [ExtrovertedValue, setExtrovertedValue] = useState(false);
  const [IntrovertedValue, setIntrovertedValue] = useState(false);
  const [NatureLoverValue, setNatureLoverValue] = useState(false);
  const [StarWarsFanValue, setStarWarsFanValue] = useState(false);
  const [ThrillSeekerValue, setThrillSeekerValue] = useState(false);
  const [BasketballFanValue, setBasketballFanValue] = useState(false);
  const [MorningPersonValue, setMorningPersonValue] = useState(false);
  const [CoffeeEnthusiastValue, setCoffeeEnthusiastValue] = useState(false);
  const [ClassicalMusicFanValue, setClassicalMusicFanValue] = useState(false);
  const [StrangerThingsFanValue, setStrangerThingsFanValue] = useState(false);

  const navigation = useNavigation();

  const OnUserPressed = () => {
    navigation.navigate('User');
  };

  //handleChange function to store checkbox values
  //I split the values in groups of 4 so you can navigater easier.
  const handleChange = data => {
    if (data == 'marvelValue') {
      if (marvelValue == true) {
        console.log(data);
      }
      setMarvelValue(!marvelValue);
    }
    if (data == 'DCValue') {
      if (DCValue == true) {
        console.log(data);
      }
      setDCValue(!DCValue);
    }
    if (data == 'GamerValue') {
      if (GamerValue == true) {
        console.log(data);
      }
      setGamerValue(!GamerValue);
    }
    if (data == 'FoodieValue') {
      if (FoodieValue == true) {
        console.log(data);
      }
      setFoodieValue(!FoodieValue);
    }
    // ----------------------------
    if (data == 'GymRatValue') {
      if (GymRatValue == true) {
        console.log(data);
      }
      setGymRatValue(!GymRatValue);
    }
    if (data == 'StrangerThingsFanValue') {
      if (StrangerThingsFanValue == true) {
        console.log(data);
      }
      setStrangerThingsFanValue(!StrangerThingsFanValue);
    }
    if (data == 'HomebodyValue') {
      if (HomebodyValue == true) {
        console.log(data);
      }
      setHomebodyValue(!HomebodyValue);
    }
    if (data == 'AnimeFanValue') {
      if (AnimeFanValue == true) {
        console.log(data);
      }
      setAnimeFanValue(!AnimeFanValue);
    }
    // ----------------------------
    if (data == 'ArtLoverValue') {
      if (ArtLoverValue == true) {
        console.log(data);
      }
      setArtLoverValue(!ArtLoverValue);
    }
    if (data == 'FilmBuffValue') {
      if (FilmBuffValue == true) {
        console.log(data);
      }
      setFilmBuffValue(!FilmBuffValue);
    }
    if (data == 'NightOwlValue') {
      if (NightOwlValue == true) {
        console.log(data);
      }
      setNightOwlValue(!NightOwlValue);
    }
    if (data == 'CatPersonValue') {
      if (CatPersonValue == true) {
        console.log(data);
      }
      setCatPersonValue(!CatPersonValue);
    }
    // ----------------------------
    if (data == 'DogPersonValue') {
      if (DogPersonValue == true) {
        console.log(data);
      }
      setDogPersonValue(!DogPersonValue);
    }
    if (data == 'IntrovertedValue') {
      if (IntrovertedValue == true) {
        console.log(data);
      }
      setIntrovertedValue(!IntrovertedValue);
    }
    if (data == 'EasyGoingValue') {
      if (EasyGoingValue == true) {
        console.log(data);
      }
      setEasyGoingValue(!EasyGoingValue);
    }
    if (data == 'ExtrovertedValue') {
      if (ExtrovertedValue == true) {
        console.log(data);
      }
      setExtrovertedValue(!ExtrovertedValue);
    }
    // ----------------------------
    if (data == 'NatureLoverValue') {
      if (NatureLoverValue == true) {
        console.log(data);
      }
      setNatureLoverValue(!NatureLoverValue);
    }
    if (data == 'StarWarsFanValue') {
      if (StarWarsFanValue == true) {
        console.log(data);
      }
      setStarWarsFanValue(!StarWarsFanValue);
    }
    if (data == 'ThrillSeekerValue') {
      if (ThrillSeekerValue == true) {
        console.log(data);
      }
      setThrillSeekerValue(!ThrillSeekerValue);
    }
    if (data == 'BasketballFanValue') {
      if (BasketballFanValue == true) {
        console.log(data);
      }
      setBasketballFanValue(!BasketballFanValue);
    }
    // ----------------------------
    if (data == 'MorningPersonValue') {
      if (MorningPersonValue == true) {
        console.log(data);
      }
      setMorningPersonValue(!MorningPersonValue);
    }
    if (data == 'CoffeeEnthusiastValue') {
      if (CoffeeEnthusiastValue == true) {
        console.log(data);
      }
      setCoffeeEnthusiastValue(!CoffeeEnthusiastValue);
    }
    if (data == 'ClassicalMusicFanValue') {
      if (ClassicalMusicFanValue == true) {
        console.log(data);
      }
      setClassicalMusicFanValue(!ClassicalMusicFanValue);
    }
    if (data == 'BeatlesFanValue') {
      if (BeatlesFanValue == true) {
        console.log(data);
      }
      setBeatlesFanValue(!BeatlesFanValue);
    }
    // ----------------------------
    if (data == 'AmbitiousValue') {
      setAmbitiousValue(!AmbitiousValue);
      console.log(data);
    }
  };


  return (

    <ScrollView>
      <View style = {styles.container}>
        <Text>{`[MarvelFan: ${marvelValue}]`}</Text>
        <CheckBox
          value={marvelValue}
          onValueChange={val => setMarvelValue(val)}
          onChange={() => handleChange('marvelValue')}
        />
     
        <Text>{`[DCFan: ${DCValue}]`}</Text>
        <CheckBox
          value={DCValue}
          onValueChange={val => setDCValue(val)}
          onChange={() => handleChange('DCValue')}
        />

        <Text>{`[GamerFan: ${GamerValue}]`}</Text>
        <CheckBox
          value={GamerValue}
          onValueChange={val => setGamerValue(val)}
          onChange={() => handleChange('GamerValue')}
        />

        <Text>{`[Foodie: ${FoodieValue}]`}</Text>
        <CheckBox
          value={FoodieValue}
          onValueChange={val => setFoodieValue(val)}
          onChange={() => handleChange('FoodieValue')}
        />

        <Text>{`[GymRat: ${GymRatValue}]`}</Text>
        <CheckBox
          value={GymRatValue}
          onValueChange={val => setGymRatValue(val)}
          onChange={() => handleChange('GymRatValue')}
        />

        <Text>{`[StrangerThingsFan: ${StrangerThingsFanValue}]`}</Text>
        <CheckBox
          value={StrangerThingsFanValue}
          onValueChange={val => setStrangerThingsFanValue(val)}
          onChange={() => handleChange('StrangerThingsFanValue')}
        />

        <Text>{`[Homebody: ${HomebodyValue}]`}</Text>
        <CheckBox
          value={HomebodyValue}
          onValueChange={val => setHomebodyValue(val)}
          onChange={() => handleChange('HomebodyValue')}
        />

        <Text>{`[AnimeFan: ${AnimeFanValue}]`}</Text>
        <CheckBox
          value={AnimeFanValue}
          onValueChange={val => setAnimeFanValue(val)}
          onChange={() => handleChange('AnimeFanValue')}
        />

        <Text>{`[ArtLover: ${ArtLoverValue}]`}</Text>
        <CheckBox
          value={ArtLoverValue}
          onValueChange={val => setArtLoverValue(val)}
          onChange={() => handleChange('ArtLoverValue')}
        />

        <Text>{`[FilmBuff: ${FilmBuffValue}]`}</Text>
        <CheckBox
          value={FilmBuffValue}
          onValueChange={val => setFilmBuffValue(val)}
          onChange={() => handleChange('FilmBuffValue')}
        />

        <Text>{`[NightOwl: ${NightOwlValue}]`}</Text>
        <CheckBox
          value={NightOwlValue}
          onValueChange={val => setNightOwlValue(val)}
          onChange={() => handleChange('NightOwlValue')}
        />

        <Text>{`[CatPerson: ${CatPersonValue}]`}</Text>
        <CheckBox
          value={CatPersonValue}
          onValueChange={val => setCatPersonValue(val)}
          onChange={() => handleChange('CatPersonValue')}
        />

        <Text>{`[DogPerson: ${DogPersonValue}]`}</Text>
        <CheckBox
          value={DogPersonValue}
          onValueChange={val => setDogPersonValue(val)}
          onChange={() => handleChange('DogPersonValue')}
        />

        <Text>{`[Introverted: ${IntrovertedValue}]`}</Text>
        <CheckBox
          value={IntrovertedValue}
          onValueChange={val => setIntrovertedValue(val)}
          onChange={() => handleChange('IntrovertedValue')}
        />

        <Text>{`[EasyGoing: ${EasyGoingValue}]`}</Text>
        <CheckBox
          value={EasyGoingValue}
          onValueChange={val => setEasyGoingValue(val)}
          onChange={() => handleChange('EasyGoingValue')}
        />

        <Text>{`[Extroverted: ${ExtrovertedValue}]`}</Text>
        <CheckBox
          value={ExtrovertedValue}
          onValueChange={val => setExtrovertedValue(val)}
          onChange={() => handleChange('ExtrovertedValue')}
        />

        <Text>{`[NatureLover: ${NatureLoverValue}]`}</Text>
        <CheckBox
          value={NatureLoverValue}
          onValueChange={val => setNatureLoverValue(val)}
          onChange={() => handleChange('NatureLoverValue')}
        />

        <Text>{`[StarWarsFan: ${StarWarsFanValue}]`}</Text>
        <CheckBox
          value={StarWarsFanValue}
          onValueChange={val => setStarWarsFanValue(val)}
          onChange={() => handleChange('StarWarsFanValue')}
        />

        <Text>{`[ThrillSeeker: ${ThrillSeekerValue}]`}</Text>
        <CheckBox
          value={ThrillSeekerValue}
          onValueChange={val => setThrillSeekerValue(val)}
          onChange={() => handleChange('ThrillSeekerValue')}
        />

        <Text>{`[BasketballFan: ${BasketballFanValue}]`}</Text>
        <CheckBox
          value={BasketballFanValue}
          onValueChange={val => setBasketballFanValue(val)}
          onChange={() => handleChange('BasketballFanValue')}
        />

        <Text>{`[MorningPerson: ${MorningPersonValue}]`}</Text>
        <CheckBox
          value={MorningPersonValue}
          onValueChange={val => setMorningPersonValue(val)}
          onChange={() => handleChange('MorningPersonValue')}
        />

        <Text>{`[CoffeeEnthusiast: ${CoffeeEnthusiastValue}]`}</Text>
        <CheckBox
          value={CoffeeEnthusiastValue}
          onValueChange={val => setCoffeeEnthusiastValue(val)}
          onChange={() => handleChange('CoffeeEnthusiastValue')}
        />

        <Text>{`[ClassicalMusicFan: ${ClassicalMusicFanValue}]`}</Text>
        <CheckBox
          value={ClassicalMusicFanValue}
          onValueChange={val => setClassicalMusicFanValue(val)}
          onChange={() => handleChange('ClassicalMusicFanValue')}
        />

        <Text>{`[BeatlesFan: ${BeatlesFanValue}]`}</Text>
        <CheckBox
          value={BeatlesFanValue}
          onValueChange={val => setBeatlesFanValue(val)}
          onChange={() => handleChange('BeatlesFanValue')}
        />

        <Text>{`[Ambitious: ${AmbitiousValue}]`}</Text>
        <CheckBox
          value={AmbitiousValue}
          onValueChange={val => setAmbitiousValue(val)}
          onChange={() => handleChange('AmbitiousValue')
          
    }
        />

        <Pressable
        onPress={() => {
          setambitiousTimesPressed((current) => current + 1);
          console.log(ambitiousTimesPressed);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'level of interest'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>

  <CustomButton
          text="Submit"
          onPress={() => Alert.alert('Your choices have been submitted.')
        }
        />
        <CustomButton text="Return to userScreen" onPress={OnUserPressed} />
       

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});