import React,{useState, useEffect} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView, ScrollView } from 'react-native';
import more from '../assets/close.png';
import card from '../assets/card.png';
import pattern from '../assets/pattern.png';
import placeholderGraph from '../assets/placeholderGraph.png';
import { addSale, getAllStock } from '../services/Database';
import SelectList from 'react-native-dropdown-select-list'



const height_proportion = '100%';

export default function Cart({route, navigation}) {

    const { name, quantity, price } = route.params;

    const [stock, setStock]=useState([{name: name, price: price, quantity: quantity}]);
    const [data, setData]=useState([]);
    const [selected, setSelected] = React.useState("");

    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newPrice, setNewPrice] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    const appendItem =async () =>{
        let newNameAndPrice = selected;
        let newQuantity = 1;

        var result = newNameAndPrice.split(", R");
        var new_Name = result[0];
        var new_Price = result[1];

        console.log(new_Name)
        console.log(new_Price)

        setNewName(new_Name);
        setNewPrice(new_Price);
        setNewQuantity(1);

        setStock([
          ...stock,
          {name: new_Name, price: new_Price, quantity: 1}
        ]);

        console.log(stock)

        //set use states
        
        // let newPrice = 
    }

    const AddItem = async ()=>{

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        var date = today

        //aray of items
        var items = []
        for(var i=0; i<stock.length; i++){
            
        items.push(stock[i].name)
          console.log(items)
        }

        await addSale({date, items, totalPrice})
        console.log("successfully added")
        navigation.navigate("SnapCode");
    }

    const populateDropdown = async ()=>{
        // let stocks=[];

        const stocksDB = await getAllStock();

        let newArray = stocksDB.map((item) => {
            return {key: item.uid, value: ""+item.name+", R"+item.price}
          })

          setData(newArray)

      }

    useEffect(() => {
     
        var tempCalc = 0
        for(var i=0; i<stock.length; i++){
            


          tempCalc = tempCalc + (parseInt(stock[i].price)*parseInt(stock[i].quantity))
          console.log(tempCalc)
        }

        setTotalPrice(tempCalc)

        // setStock({name, quantity, price})
populateDropdown()
      },[newName]);


    // const [aiReturned, setAiReturned]=useState({
    //     name: 'Simba Chips',quantity:1, price:20
    // },{  name: 'Apples',quantity:1, price:12}
    
    // );


  return (
    // <ScrollView>


    <SafeAreaView style={styles.container}>

        <View style={styles.container2}>
      
        <Text style={styles.header}>New Sale</Text>
            <Text style={styles.text}>calculated using AI</Text>


            {stock.map((item, index) => (
                <View key={index} style={styles.border}>
                    <TouchableOpacity style={styles.square}>
                    <Image source={more} style={styles.more} />
                    </TouchableOpacity>

                         <View style={styles.col2}>
                         <Text style={styles.lastSale1}>{item.name}</Text>
                         <Text style={styles.lastSale2}>R{item.price}</Text>
                            </View>    

                            <View style={styles.price}>
                            <Text style={styles.lastSale3}>{item.quantity}</Text>
                            </View>
            
                          
                </View> 
                ))} 

                <View style={styles.selectContainer}>
                <SelectList setSelected={setSelected} data={data} onSelect={appendItem} boxStyles={{marginTop:20, borderColor:'#1E2F4D', borderWidth:1.5, color:'#1E2F4D', padding:20, borderRadius:18}} inputStyles={{fontColor:"#1E2F4D", fontSize:15}} placeholder="add item manually" dropdownStyles={{borderColor:'#1E2F4D', borderWidth:1.5, color:'#1E2F4D',  borderRadius:18}}/>
                </View>

                <View style={{width:'100%',   flexDirection:'row'}}>
                    <Text style={styles.sub}>Subtotal</Text>
                    <Text style={styles.sub2}>R{totalPrice}</Text>
                </View>


            <TouchableOpacity style={styles.btn} onPress={AddItem}>
            <Text style={styles.btntxt} >checkout</Text> 
            </TouchableOpacity>
            
            <View style={styles.btnbg}/>

            
    
           

        </View>

        <View style={styles.navigation}>
        <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}><Text  style={styles.navItem}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Stocktake")}><Text  style={styles.navItem}>Stocktake</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("SellInstructions")}><Text  style={styles.navItemActive}>Sell</Text></TouchableOpacity>

        <View style={styles.underline}></View>
        </View>

        

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: '#FEB930',
        width:'100%',
        alignItems: 'center',

      },    container2: {
        flex: 1,
        borderRadius:40,
        backgroundColor: '#FFF',
        width:'100%',
        padding:40, 
        alignItems: 'center',
      
        top:60

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
        textAlign:'center',
      },
    
    text:{
        color:'#1E2F4D',
        fontSize:18,
        marginTop:5,
        marginBottom:20,
        textAlign:'center',
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
    },sub:{
        width:'50%',
        color:'#1E2F4D',
        fontSize:18,
        marginTop:25,
        alignSelf:'flex-start',
        marginLeft:5
    },sub2:{
        width:'45%',
        color:'#1E2F4D',
        fontSize:18,
        marginTop:25,
        textAlign:'right',
        alignSelf:'flex-end',
        fontWeight:'bold',
        marginRight:15
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
    fontSize:16,
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
    width:35,
    height:2,
    backgroundColor:'#FEB930',
    marginTop:43,
    marginLeft:265
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
}, more:{
    marginTop:37,

},selectContainer:{
    width:'100%'
}, btn:{
    width: '100%',
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
    width: '100%',
    height:62, 
    backgroundColor: '#FEB930',
    borderRadius:20,
    zIndex:-1,
    marginTop:-53,
    marginLeft:8
  },
     
});