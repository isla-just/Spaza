import React,{useState, useRef} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView, ScrollView } from 'react-native';
import close from '../assets/close.png';
import more from '../assets/more.png';
import { useFocusEffect } from '@react-navigation/native'
import { doc, onSnapshot } from 'firebase/firestore'

import pattern from '../assets/pattern.png';
import placeholderGraph from '../assets/placeholderGraph.png';
import { addStock, getAllStockListener, editStock, deleteStock } from '../services/Database';


const height_proportion = '100%';
const btn_prop = '100%';

export default function Stocktake({navigation}) {

    const [search, onSearch]=useState("");

    const [name, onItemChange]=useState("");
    const [quantity, onQuantityChange]=useState("");
    const [price, onPriceChange]=useState("");

    const [shouldShow, setShouldShow] = useState(false);
    const [editShow, setEditShow] = useState(false);

    const [activeId, setActiveId] = useState(0);
    const [activeName, setActiveName] = useState("");
    const [activeQuantity, setActiveQuantity] = useState(0);
    const [activePrice, setActivePrice] = useState(0);

    const [stock, setStock]=useState([]);


  useFocusEffect(
    React.useCallback(()=>{


      const collectionRef=getAllStockListener();

      const unsub = onSnapshot(collectionRef, (snapshot)=>{
        let stocks=[];
        snapshot.forEach((doc)=>{

            let stockData={...doc.data(), uid:doc.id}

            stocks.push(stockData);
        })

        setStock(stocks);
    })

    return()=>{
        //do something here when the sacreen is focussed
        unsub();
    }
    },[])
    )
    
    const AddItem = async ()=>{
        // console.log(comp.uid)
        await addStock({name, quantity, price})
        setShouldShow(false)
        console.log("successfully added")
    }

    const EditItem= async ()=>{

        await editStock(activeId, {name:activeName, quantity:activeQuantity, price:activePrice});
        // setNewTag();
        setEditShow(false)
        setActivePrice(0)
        setActiveQuantity(0)
        setActiveId(0)
        setActiveName("")
    }

    const DeleteItem = async ()=>{
        // console.log(comp.uid)
        await deleteStock(activeId)
        setEditShow(false)
        console.log("has been deleted")
    }


  return (
    // <ScrollView>


    <SafeAreaView style={styles.container}>

        <ScrollView style={styles.container2}>
      
        <Text style={styles.header}>Items in your shop</Text>
            <Text style={styles.text}>this is where you can update prices or quantities</Text>

{stock.map((item, index) => (

<View key={index} style={styles.border}>
{/* use state selected uid = set that to the value of the button */}

<TouchableOpacity style={styles.square} id={item.uid} onPress={() => {setEditShow(!editShow); setActiveId(item.uid); setActiveName(item.name); setActivePrice(item.price); setActiveQuantity(item.quantity) }} >
<Image source={more} style={styles.more} />
</TouchableOpacity>

<View style={styles.col2}>
{/* <Text style={styles.lastSale1}>{item.uid}</Text> */}
<Text style={styles.lastSale1}>{item.name}</Text>
<Text style={styles.lastSale2}>{item.quantity} pcs</Text>
   </View>    

   <View style={styles.price}>
   <Text style={styles.lastSale3}>R{item.price}</Text>
   </View>
    
        </View>
))}




            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt} onPress={() => setShouldShow(!shouldShow)} >Add new item</Text> 
            </TouchableOpacity>
            
            <View style={styles.btnbg1}/>

        </ScrollView>

        <View style={styles.navigation}>
        <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}><Text  style={styles.navItem}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Stocktake")}><Text  style={styles.navItemActive}>Stocktake</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("SellInstructions")}><Text  style={styles.navItem}>Sell</Text></TouchableOpacity>

        <View style={styles.underline}></View>
        </View>

        {shouldShow ?
        (
            <View style={styles.overlay}>
            <View style={styles.popupBlock}>
            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={styles.closeBtn}>
            <Image source={close} style={styles.close} />
            </TouchableOpacity>

            <Text style={styles.headerPopup}>Add new item</Text>
            <Text style={styles.headerPopup2}>Psttt name the item according to its packaging</Text>

            <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding":"height"}
        style={styles.writeTaskWrapper}>
                        <TextInput
             style={styles.input2}
             value={name}
             onChangeText={onItemChange}
             placeholder='Item name'
             placeholderTextColor='#616D82'
            />

             <TextInput
             style={styles.input2}
             value={quantity}
             onChangeText={onQuantityChange}
             placeholder='Quantity'
             placeholderTextColor='#616D82'
            />

            <TextInput
             style={styles.input2}
             value={price}
             onChangeText={onPriceChange}
             placeholder='Price per unit'
             placeholderTextColor='#616D82'
             
             
            />

            <TouchableOpacity style={styles.btnPopup}>
            <Text style={styles.btntxt} onPress={AddItem}>Add</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>

        </KeyboardAvoidingView>

      
            </View>

        </View>
        ) : null}

{editShow ?
        (
            <View style={styles.overlay}>
            <View style={styles.popupBlock}>
            <TouchableOpacity onPress={() => setEditShow(!editShow)} style={styles.closeBtn}>
            <Image source={close} style={styles.close} />
            </TouchableOpacity>

            <Text style={styles.headerPopup}>{activeName}</Text>
    
            <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding":"height"}
        style={styles.writeTaskWrapper}>

<Text style={styles.smol}>Quantity</Text>
             <TextInput
             style={styles.input2}
             value={activeQuantity}
             onChangeText={setActiveQuantity}
            />


<Text style={styles.smol}>Price per unit</Text>

            <TextInput
             style={styles.input2}
             value={activePrice}
             onChangeText={setActivePrice}
            />

            <TouchableOpacity style={styles.btnPopup}>
            <Text style={styles.btntxt} onPress={EditItem}>Save changes</Text> 
            </TouchableOpacity>
            <View style={styles.btnbgPopup}/>

            <TouchableOpacity>
            <Text style={styles.deleteTxt} onPress={DeleteItem}>delete item</Text> 
            </TouchableOpacity>

        </KeyboardAvoidingView>

      
            </View>

        </View>
        ) : null}

       

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 
        alignItems: 'center',

      },    container2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 

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
        alignSelf:'flex-start'
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
        marginTop:-90,
        alignSelf:'flex-start',
        marginLeft:0,


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
    marginLeft:200,
    marginTop:-100,
    flexDirection:'row',

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
    marginLeft:200,
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
    borderTopRightRadius:0,
    borderTopLeftRadius:18,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:18,
    backgroundColor:'#FEB930',
    width:58,
    height:84,
    borderRightWidth:1.5,
    borderColor:'#1E2F4D',
    alignItems: 'center'
}, more:{
marginTop:32,
height:20

    
}, lastSale1:{
    color:'#1E2F4D',
    fontSize:18,
    marginTop:20,
    textAlign:'left',
    fontWeight:'bold',
    width:120
  
}, lastSale2:{
    color:'#1E2F4D',
    fontSize:14,
    textAlign:'left',
    width:120
  
},price:{
    backgroundColor:'#C6D7EA',
    width:80,
    padding:10,
    borderTopRightRadius:0,
    borderTopLeftRadius:18,
    borderBottomRightRadius:18,
    borderBottomLeftRadius:0,
    marginTop:40,
    zIndex:-1
}, lastSale3:{
    color:'#1E2F4D',
    fontSize:20,
    textAlign:'right',
    paddingRight:5
},placeholderGraph:{
    marginTop:20
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
    width:85,
    height:2,
    backgroundColor:'#FEB930',
    marginTop:43,
    marginLeft:125
},    input:{
    marginTop:30,
    width:'100%',
    padding:23,
    backgroundColor:'#1E2F4D',
    fontSize:15,
    fontColor:'#FFFFFF',
    color:'#FFFFFF',
    borderRadius:18,
    placeholderTextColor:'#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 20,
}, testBtn:{
    Color:'#1E2F4D',
    textAlign:'center',
    marginTop:100
}, btn:{
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
        marginTop:-53,
        marginLeft:8,
      }, overlay:{
        position:'absolute',
        backgroundColor:'#00000050',
        width:'100%',
        height:'100%',
     
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },popupBlock:{
        position:'absolute',
        width:'85%',
        backgroundColor:'#fff',
        borderRadius:18,        
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 20,
        padding:30,
    
      }, close:{
        alignSelf:'flex-end'
      }, headerPopup:{
        color:'#1E2F4D',
        fontSize:20,
        marginTop:-20,
        width:'100%',
        fontWeight:'bold',
        textAlign:'center'
      },headerPopup2:{
        color:'#1E2F4D',
        fontSize:15,
        marginTop:5,
        width:'100%',
        textAlign:'center'
      },    input2:{
        borderBottomWidth:1,
        borderBottomColor:'#1E2F4D',
        marginTop:30,
        width:'100%',
        padding:10,
        backgroundColor:'#FFF',
        fontSize:15,
      }, closeBtn:{
        width:40,
        height:40,
        alignSelf:'flex-end'
      }, btnPopup:{
        width: btn_prop,
        padding: 20,
        backgroundColor: 'transparent',
        borderColor:'#1E2F4D',
        borderWidth:1.5,
        borderRadius:20,
        marginTop:30
      },btnbgPopup:{
        width: btn_prop,
        height:62, 
        backgroundColor: '#FEB930',
        borderRadius:20,
        zIndex:-1,
        marginTop:-53,
        marginLeft:8
      },deleteTxt:{
        textAlign:'center',
        fontSize:15,
        marginTop:20,
        textDecorationLine: 'underline',
        color:'#1E2F4D'

      }, smol:{
        fontSize:12,
        color:'#1E2F4D',
        marginTop:20,
        marginBottom:-30

      },btnbg1:{
        width: btn_prop,
        height:62, 
        backgroundColor: '#FEB930',
        borderRadius:20,
        zIndex:-1,
        marginTop:-53,
        marginLeft:8,
        marginBottom: 120
      },
     
});