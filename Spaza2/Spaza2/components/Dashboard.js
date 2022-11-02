import React,{useState} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView, ScrollView } from 'react-native';
import logo from '../assets/logo.png';
import card from '../assets/card.png';

import { useFocusEffect } from '@react-navigation/native'
import { doc, onSnapshot } from 'firebase/firestore'

import pattern from '../assets/pattern.png';
import placeholderGraph from '../assets/placeholderGraph.png';

import { addStock, getAllSalesListener, getAllStockListener } from '../services/Database';


// import * as Font from 'expo-font';

// Font.loadAsync({
//     // 'light':require('../assets/fonts/MontserratAlternates-Light.ttf'),
//     // 'regular':require('../assets/fonts/MontserratAlternates-Regular.ttf'),
//     'medium':require('../assets/fonts/MontserratAlternates-Medium.ttf'),
//     'semiBold':require('../assets/fonts/MontserratAlternates-SemiBold.ttf'),
//   });

const height_proportion = '100%';

export default function Dashboard({navigation, route}) {

    const [stock, setStock]=useState([]);
    const [sales, setSales]=useState([]);
    const [stockQuantity, setStockQuantity]=useState(0);
    const [salesCounter, setSalesCounter]=useState(0);
    const [monthlyCounter, setMonthlyCounter]=useState(0);
    const [mostRecent, setMostRecent]=useState([]);

    const userData = route.params;

    const GetStockCounter = async ()=>{
        let stockTotal=0
        for(var i=0; i<stock.length; i++){
            stockTotal = stockTotal + parseInt(stock[i].quantity)
        }

        setStockQuantity(stockTotal)
    }

    const GetMostRecent = async ()=>{
        let recent=[]
      if(sales != null && sales != undefined){
        setMostRecent(sales[sales.length-1])
        // console.log(sales[sales.length-1])
        // console.log(sales[0])
      }
    }

  useFocusEffect(
    
    React.useCallback(()=>{

        GetStockCounter()
  

      const collectionRef=getAllStockListener();

      const unsub = onSnapshot(collectionRef, (snapshot)=>{
        let stocks=[];
    
        snapshot.forEach((doc)=>{

            let stockData={...doc.data(), uid:doc.id}

            stocks.push(stockData);
        })
        setStock(stocks);
    })

     //get all sales


     const collectionRef2=getAllSalesListener();

     const unsub2 = onSnapshot(collectionRef2, (snapshot)=>{
       let sale=[];
   
       snapshot.forEach((doc)=>{

           let salesData={...doc.data(), uid:doc.id}

           sale.push(salesData);

       })

       setSales(sale);

       setSalesCounter(sale.length)
      

       const today = new Date().getMonth()+1;
      
       var monthCounter = 0;

       for (var i=0;i<sales.length; i++){
       var monthVal = parseInt(sale[i].date.slice(0, 2));
        if(monthVal == today){
            monthCounter++;
        }else{
            //do nothing
        }
       }

       setMonthlyCounter(monthCounter)

    })

    GetMostRecent()

    return()=>{
        //do something here when the sacreen is focussed
        unsub();
        unsub2();
    }
  
    },[sales, monthlyCounter, salesCounter])
    )
    

  return (
    // <ScrollView>


    <SafeAreaView style={styles.container}>

        <ScrollView style={styles.container2}>
      
            <Text style={styles.text}>hi there</Text>
            <Text style={styles.header}>{userData.email}</Text>

  
 
            <Image source={card} style={styles.card} />
           <View style={styles.cardoverlap}>
            <Text style={styles.count}>{salesCounter}</Text>
            <Text style={styles.label}>total sales with spaza</Text>
           </View>

            <View style={styles.yellowBlock}>
            <Text style={styles.header2}>{stockQuantity}</Text>
            <Text style={styles.text2}>items in stock</Text>
      
            </View>

            <View style={styles.blueBlock}>
            <Text style={styles.header3}>{monthlyCounter}</Text>
            <Text style={styles.text3}>sales in the month of November</Text>
            </View>
            <Image source={pattern} style={styles.pattern} />
           
            <Text style={styles.headerSection}>Sales history</Text>
            <Text style={styles.text}>last sale</Text>

                <View style={styles.border}>
                

                         <View style={styles.col2}>
                         <Text style={styles.lastSale1}>{mostRecent.items}</Text>
                         <Text style={styles.lastSale2}>{mostRecent.date}</Text>
                            </View>    

                            <View style={styles.price}>
                            <Text style={styles.lastSale3}>R{mostRecent.totalPrice}</Text>
                            </View>
            
                          
                </View>

                <Text style={styles.textCat}>this month's sales</Text>
                <Image source={placeholderGraph} style={styles.placeholderGraph} />

            <Text style={styles.headerSection}>Stock running low</Text>
            <Text style={styles.text}>add these to your upcoming shopping list</Text>
           

        </ScrollView>

        <View style={styles.navigation}>
        <TouchableOpacity><Text  style={styles.navItemActive}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Stocktake")}><Text  style={styles.navItem}>Stocktake</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("SellInstructions")}><Text  style={styles.navItem}>Sell</Text></TouchableOpacity>

        <View style={styles.underline}></View>
        </View>

        

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:-40, 
        alignItems: 'center',

      },        container2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 
      },card:{
        marginLeft:-40
      },
      half1:{
        width: '50%',
        alignSelf:'flex-start',
        padding:40, 
      }, 
      half2:{
        width: '50%',
        alignSelf:'flex-end',
        padding:40, 
      }, 
      header:{
        color:'#1E2F4D',
        fontSize:25,
        marginTop:0,
        width:'100%',
        fontWeight:'bold',
      },
    
    text:{
        color:'#1E2F4D',
        fontSize:18,
        marginTop:5,
        alignSelf:'flex-start',
        width:'100%',
    },    textCat:{
        color:'#1E2F4D',
        fontSize:18,
        marginTop:20,
        alignSelf:'flex-start'
    },
    pfp:{
        backgroundColor:'#FEB930',
        width:55,
        height:55,
borderRadius:55,
        marginTop:-50,
        alignSelf:'flex-end'
    }, yellowBlock:{
        backgroundColor:'#FEB930',
        width:110,
        borderRadius:18,
        padding:20,
        alignSelf:'flex-start',
        marginLeft:0,
        marginTop:40,


        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 20,
    }, 
    header2:{
      color:'#1E2F4D',
      fontSize:30,
      marginTop:0,
      width:'100%',
      textAlign:'center',
      fontWeight:'bold'
    },
  
  text2:{
      color:'#1E2F4D',
      fontSize:18,
      marginTop:5,
      textAlign:'center'
  },blueBlock:{
    backgroundColor:'#C6D7EA',
    width:230,
    borderRadius:18,
    padding:20,
    marginLeft:135,
    flexDirection:'row',
    marginTop:-125,

    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 15,

  },    header3:{
    color:'#1E2F4D',
    fontSize:30,
    marginTop:0,
    width:'100%',
    textAlign:'left',
    fontWeight:'bold',
  },

text3:{
    color:'#1E2F4D',
    fontSize:13,
    marginTop:5,
    textAlign:'left',
    width:120,
    marginLeft:-140,
}, pattern:{
    marginTop:-130,
    marginLeft:160,
    zIndex:-1
},headerSection:{
    color:'#1E2F4D',
    fontSize:25,
    marginTop:0,
    width:'100%',
    textAlign:'left',
    marginTop:60,
    fontWeight:'bold'
}, border:{
    width:'100%',
    borderWidth:1.5,
    borderColor:'#1E2F4D',
    borderRadius:18,
   
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'left',
},square:{
    borderRadius:18,
    backgroundColor:'#FEB930',
    width:58,
    height:58,
    margin:10,
    
}, lastSale1:{
    color:'#1E2F4D',
    fontSize:16,
    marginTop:20,
    textAlign:'left',
  
}, lastSale2:{
    color:'#1E2F4D',
    fontSize:12,
    textAlign:'left',
  
},price:{
    backgroundColor:'#C6D7EA',
    width:90,
    padding:10,
    borderTopRightRadius:0,
    borderTopLeftRadius:18,
    borderBottomRightRadius:18,
    borderBottomLeftRadius:0,
    marginTop:35,
    zIndex:-1
}, lastSale3:{
    color:'#1E2F4D',
    fontSize:20,
    textAlign:'left',
  
},placeholderGraph:{
    marginTop:20,
    width:'100%'
},navigation:{
    backgroundColor:'#1E2F4D',
    width:'100%',
    position:'absolute',
    borderTopRightRadius:18,
    borderTopLeftRadius:18,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    height:90,
    bottom:0,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'left',
    padding:20,
},navItemActive:{
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:18
},navItem:{
    color:'#FFFFFF',
    fontSize:18
},underline:{
    position:'absolute',
    width:50,
    height:2,
    backgroundColor:'#FEB930',
    marginTop:43,
    marginLeft:20
},cardoverlap:{
    width:180,
    marginLeft:20,

    marginTop:-190,
    flexDirection:'row',

}, count:{
    fontSize:50,
    color:'#FFFFFF',
    fontWeight:'bold',
}, label:{
    fontSize:15,
    color:'#FFFFFF',
    marginLeft:40,
    marginTop:10,
    width:100

}, col2:{
    marginLeft:20
}
     
});