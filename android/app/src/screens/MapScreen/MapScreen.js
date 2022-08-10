const API_KEY = 'AIzaSyCQYSxVSPEXyCEa-7r-8ThhaqiH4YWW6oU';
const _url_ = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";



import React, {Component } from 'react';
import {StyleSheet,View,Text, ScrollView,Image, TouchableOpacity,Platform} from 'react-native';
import MapView, {Callout, Circle, Marker } from 'react-native-maps';
import {FAB } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import { request,PERMISSIONS } from 'react-native-permissions';


export default class Map extends Component {
constructor(){
    super()
    this.state={
        lat:0,
        long:0,
        places:null,
        change_places:null,
        my_place_id: [],
        my_images:[],
        default_andy:null
    }
}

//Permission Request, which is needed when opening up the map for it to function correctly.
requestLocationPermission = async()=>
{
    if(Platform.OS==='android'){
    var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    console.log('The access for Android  is:' + response);
    if(response==='granted'){
        this.get_current_Location();
    }
    }
    else{
        var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        console.log('The access for IOS is : ' + response);
        if(response === 'granted'){
            this.get_current_Location();
        }
    }
}
//Gets Current Location of the person
get_current_Location(){
    Geolocation.getCurrentPosition(
        (position)=>{
            //to change where the map starts off
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            this.setState({lat,long})
           
        },
    )
}


//Gets current Position of the user and sets it as the default/starting location of the map when you load in.
componentDidMount(){
    this.requestLocationPermission();
    this.get_current_Location();
}



//This function is used to fetch all the places around the user using the url provided.
Places(){
    const url = this.URL(this.state.lat,this.state.long,600, 'restaurants', API_KEY)
    fetch(url)
    .then((data)=>data.json())
    .then((res)=>{
      //console.log(res)
      //Google Photos API set-up
        this.state.default_andy = res.results;

        for(let  i =1; i <6;i++){
        if(res.results[i].photos[0].photo_reference == null)
        {
            i++;
        }
        else{
        this.state.my_place_id[i] = res.results[i].photos[0].photo_reference;
        }
        }



        console.log(this.state.my_place_id)
        for(let i =1; i < 6;i++){
        this.state.my_images[i] = this.URL2(400,this.state.my_place_id[i],API_KEY)
       
        }
        //console.log(this.state.my_images)
        const Markers =[];
        res.results.map((element,i)=>{
            Markers.push(
                <Marker 
                key={i}
                coordinate={{
                    latitude:element.geometry.location.lat,
                    longitude:element.geometry.location.lng,
                }}
                //Changing image to the bad ones 
                image = {element.icon}>
                <Callout>
                    <View>
                        <Text>{element.name}</Text>
                        
                        
                        <Text>Rating:{element.rating}</Text>            
                    </View>
                </Callout>
                </Marker>
            )
        })
        
        this.setState({places:Markers});
    })
}
//Sets up the URL itself, so that the user doesn't have to manually keep changing each section
//Since the url has different parts like API/TYPE/LAT-LONG/RADIUS
URL(lat,long,radius,type,API){
const url =_url_;
const location =`location=${lat},${long}&radius=${radius}`;
const typeData = `&types=${type}`;
const key = `&key=${API}`;
return `${url}${location}${typeData}${key}`;
}

URL2(width,references,API2){
    const urlz = "https://maps.googleapis.com/maps/api/place/photo?";
    const maxwidth = `maxwidth=${width}`;
    const refere = `&photo_reference=${references}`;
    const keyz = `&key=${API2}`;
    return `${urlz}${maxwidth}${refere}${keyz}`;
    }

render(){
return(
<View style ={styles.sectionContainer}>
    <MapView
    style={{flex:1}}
    region={{
        latitude: this.state.lat,
        longitude: this.state.long,        
        latitudeDelta:0.03,
        longitudeDelta:0.04
    }}>
<Marker 
//Person Marker
coordinate={{
    latitude: this.state.lat,
    longitude: this.state.long,}}
    draggable = {true}
    onDragStart = {(e) => {
        console.log("Start",e.nativeEvent.coordinate)
        
    }}
    onDragEnd = {(e)=>{
        console.log("Drag End",e.nativeEvent.coordinate)
        
        this.setState({...this.state.lat, lat:e.nativeEvent.coordinate.latitude})
        this.setState({...this.state.long, long:e.nativeEvent.coordinate.longitude})
        this.Places(this.state.lat,this.state.long)
       
    }}>
        
        <View>
            <Image style = {styles.man} source ={require("./../../../../../assets/images/person.png")}/>
        </View>
    </Marker>
    <Circle 
    center = {{latitude:this.state.lat,
               longitude:this.state.long}}
    radius ={700}
    fillColor ={'rgba(200,300,200,0.5)'}/>

{this.state.places}
    </MapView>
    <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails = {true}
             GooglePlacesSearchQuery =
            {
                {
                rankby:"distance",          
                }
            }
            onPress={(data,details=null)=>
            {
            console.log(data,details)
            //Pan to the searched location with the "person marker"
            this.setState({...this.state.lat, lat:details.geometry.location.lat})
            this.setState({...this.state.long, long:details.geometry.location.lng})
            }}
            //Currently just using the actual key but later will be changed to API_KEY
            query={{key:API_KEY,
            language:"en",
            components:"country:us",
            //Searches only for establishments, change this to address
            types:"establishment",
            radius:1500,//In meters
            }}> 
            </GooglePlacesAutocomplete>
            </View>

            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={true}
                style ={styles.Scrolling}
                
                >                  
                
            {this.state.my_images.map((imagez,index)=>
               <View style={styles.card} key={index}>
               <Image
                   source = {{uri:imagez}}
                   style ={styles.cardImage}
                   resizeMode="cover"
               />
               
           </View>
            )}
            
            </ScrollView>









































</View>
);
}
}
// Styling for the Functions above
const styles = StyleSheet.create({
    // Filling the entire page with just the map
    sectionContainer:
    {
        flex:1
    },
    mapStyle:{
        height:'100%'
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    },
    // Fab styling
    fab:{
        position: "absolute",
        right:0,
        bottom:0,
        margin:16
    },
    //General Text 
    texting:{
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center',
        textShadowColor:'#8B0000'
    },
    //Search Bar Styling
    searchBox: {
       position:"absolute",
       width:"90%",
       top:10,
       left:16,
       flexDirection:'row',
       backgroundColor:"white",
       shadowColor:"purple",
       shadowOpacity:.4, //0-1
       shadowRadius:20,
       elevation:20, //for android
       padding:3,
       borderRadius:15

      },
      //Your location (man marker)
      man:{
        width:50,
        height:50,
        resizeMode:"contain",
        alignSelf:"center"

      },
      //Styling of the scroll thingy
      Scrolling:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
      fab:{
        position:'absolute',
        right:0,
        bottom:0
      },
      card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 30,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        overflow: "hidden",
      },
      cardImage: {
        flex: 1,
        width : 300,
        height:  100,
        alignSelf: "center",
      },














});
