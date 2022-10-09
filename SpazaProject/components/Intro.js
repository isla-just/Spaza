import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../assets/logo.png';
 
const width_proportion = '120%';

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
 
export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showRealApp: false
          }
    }

  _renderItem = ({ item }) => {
    return (
        
      <View style={styles.slide}>

         <Image source={logo} style={styles.logo} />
        
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 
        alignItems: 'center',
      },
    logo: { 
        height: 35,
        width: 146,
        marginTop: 40,
        marginBottom: 40
      },

    image: { 
      width: width_proportion,
      marginTop: 60,
    },
      title:{
          color:'#1E2F4D',
          fontSize:30,
          marginTop:20,
          textAlign:'center'
      },
      text:{
          color:'#1E2F4D',
          fontSize:20,
          marginTop:10,
          textAlign:'center'
      },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});