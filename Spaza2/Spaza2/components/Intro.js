import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../assets/logo.png';
import Login from './Login';
import Signup from './Signup';
 
const height_proportion = '100%';
const btn_prop = '80%';
const txt_prop = '90%';


const slides = [
    {
      key: 1,
      title: 'selling has never been simpler..',
      text: 'streamlining your spaza shop',
      image: require('../assets/ill1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'easy, fast, secure and cashless transactions',
      text: 'using snapscan to automate the transaction process',
      image: require('../assets/ill2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'the missing piece to your small business',
      text: 'join spaza today to start selling the smart way!',
      image: require('../assets/ill3.png'),
      backgroundColor: '#22bcb5',
    }
  ];
 
export default class Intro extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showRealApp: false
          }
    }

  _renderItem = ({ item }) => {
    return (
        
        <SafeAreaView style={styles.container}>

<Image source={logo} style={styles.logo} />

                <View style={styles.slide}>

          

            <Image source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>

            </View>

            <TouchableOpacity style={styles.btn} onPress={this._onDone}>
            <Text style={styles.btntxt}>Join the family</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>


            </SafeAreaView>

    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
   
  }
  render() {
    if (this.state.showRealApp) {
      // return <Login />;
      return <Signup />;
    } else {
      return <AppIntroSlider activeDotStyle={{width: 40, backgroundColor:'#1E2F4D'}} renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 
        alignItems: 'center',
      },
    slide: {
        backgroundColor: '#FFFFFF',
        width:'100%',
        alignItems: 'center',
      },
    logo: { 
        height: 35,
        width: 146,
        marginTop: 40,
        marginBottom: 40
      },

    image: { 
      width: height_proportion,
      marginTop: 60,
    },
      title:{
          color:'#1E2F4D',
          fontSize:25,
          marginTop:20,
          textAlign:'center',
          width: txt_prop,
      },
      text:{
          color:'#1E2F4D',
          fontSize:18,
          marginTop:10,
          textAlign:'center',
          width: txt_prop,
      },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn:{
        width: btn_prop,
        padding: 20,
        backgroundColor: 'transparent',
        borderColor:'#1E2F4D',
        borderWidth:1.5,
        borderRadius:20,
        marginTop:20
      }, btntxt:{
        textAlign:'center',
        fontSize:15
      },btnbg:{
        width: btn_prop,
        height:62, 
        backgroundColor: '#FEB930',
        borderRadius:20,
        zIndex:-1,
        marginTop:-55,
        marginLeft:13

      }
});