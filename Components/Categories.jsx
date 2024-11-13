
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { TextInput } from 'react-native-gesture-handler';
import { SliderBox } from "react-native-image-slider-box";
const Categories = () => {
    return (
        
        <View style={styles.container}>
            <StatusBar/>
             {/* Categories change  */}
             <View>
                <TouchableOpacity style={styles.searchbox}>
                <EvilIcons name="search" size={30} color="black" paddingLeft={5} marginTop={-4} />
                <TextInput placeholder='Search' style={styles.input}></TextInput>
                </TouchableOpacity>
             </View>
            <Text style={styles.head}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ddfbf3' }]}>
                    <View><Image source={require('./assets/pizza1.jpg')} style={styles.image} />

                    <View><Text style={styles.text}>Pizza</Text></View></View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#f5e5ff' }]}>
                    <View><Image source={require('./assets/icon_2.png')} style={styles.image} />

                    <View><Text style={styles.text}>Burger</Text></View></View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#e5f1ff' }]}>
                    <View><Image source={require('./assets/icon_4.png')} styles={{marginLeft:10}}style={styles.image} />

                    <View><Text style={styles.text}>Noodles</Text></View></View>
                </TouchableOpacity>
               < TouchableOpacity style={[styles.box, { backgroundColor: '#e5f1ff' }]}>
                    <View><Image source={require('./assets/icon_5.png')} styles={{marginLeft:10}}style={styles.image} />

                    <View><Text style={styles.text}>Pasta</Text></View></View>
                </TouchableOpacity>

                
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                    <View><Image source={require('./assets/thali.jpeg')} style={styles.image} />

                    <View><Text style={styles.text}>Thali</Text></View></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                    <View><Image source={require('./assets/icon_3.png')} style={styles.image} />

                    <Text style={styles.text}>Drink</Text></View>
                </TouchableOpacity>


            </ScrollView>
            
        </View>
        
     
   
    )
    
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical:40,
        //backgroundColor: 'green',
        borderRadius: '10'
    },
    head: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        paddingBottom: 5,
        paddingLeft: 5
    },
    image: {
        width: 55,
        height: 55,
        resizeMode:'center',
        
        
        
    },
    box: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height:100,
        width:75,
        marginLeft: 15, //horizontal
        marginBottom: 15, //10
        borderRadius: 50,//20
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    text: {
        
        alignSelf:'center',
        fontSize:15,
        
    },
    searchbox:{
        flexDirection:'row',
        width:'92%',
        height:40,
        borderWidth:2,
        borderColor:'black',
        borderRadius:20,
        alignItems:'center',
        alignSelf:'center',
    },
    input:{
       fontSize:20,
       color:'black',
       width:'97%'
    }
})
