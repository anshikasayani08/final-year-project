import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput,Button,Icon,FlatList,Image,Dimensions}  from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs";
import Categories from "./Categories";
import Headerbar from "./HeaderBar";
import CardSlider from "./CardSlider";
import MainPage1 from "./MainPage1";
import OfferSlider from "./OfferSlider";

const Tab=createBottomTabNavigator();
const BottomTab=()=>{
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: "false",
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainPage1}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="home" size={30} color={"black"} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="open-book" size={30} color={"black"} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="shoppingcart" size={30} color={"black"} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={30} color={"black"} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
};
// const Carousel=()=>{

//   const flatlistRef=useRef();
//   //get dimensions
//   const screenWidth=Dimensions.get("window").width;

//   const [activeIndex,setActiveIndex]=useState(0);

//   // Autoscroll
//   useEffect(()=>{
//     let interval = setInterval(()=>{
//      if(activeIndex== carouselData.length-1){
//        flatlistRef.current.scrollToIndex({
//          index: 0,
//          animation:true,

//        });
//       } else {
//         flatlistRef.current.scrollToIndex({
//           index:activeIndex+1,
//           animation:true,
 
//         });

//        }

//      },2000);

//      return ()=>clearInterval(interval);
//     });
  
//     const getItemLayout=(data,index)=>({
//      length:screenWidth,
//      offset:screenWidth*index,
//      index:index,
     

//     })
//   // carousel data
//   const carouselData = [
//     {
//       id: "01",
//       image: require("./assets/slider_1.jpg"),
//     },
//     {
//       id: "02",
//       image: require("./assets/slider_2.jpg"),
//     },
//     {
//       id: "03",
//       image: require("./assets/slider_3.jpg"),
//     },
//   ];


//   const renderItem = ({item,index}) => {
//     return (
//       <View style={{ backgroundColor: "white" }}>
//         <Text></Text>
//         <Image source={item.image} style={{height:200,width:screenWidth}}/>
//       </View>
//     );
//   };

//   const handleScroll=(event)=>{
//     //get the scroll position
//      const scrollPosition= event.nativeEvent.contentOffset.x;
     
//     //get the index of current active item
//     const index=scrollPosition/screenWidth;
//     // screenWidth=360
//     // scrollPosition=360=360 //720(when we go from index 1 to 2)
//     //720/2=360
   

//     //update the index
//     setActiveIndex(index);

//   };

//   // const renderDotIndicators=()=>{
//   //   return carouselData.map((dot,index)=>{
//   //     //if the activeindex == index

//   //     if(activeIndex == index)
//   //     {
//   //       return(
//   //         <View 
//   //         key={index}
//   //         style={{
//   //           backgroundColor:'green',
//   //           height:10,
//   //           width:10,
//   //           borderRadius:5,
//   //           marginHorizontal:6,
//   //           }}>
    
    
//   //         </View>
//   //         );
//   //       }
//   //       else
//   //       {
//   //         return(
//   //           <View 
//   //           key={index}
//   //           style={{
//   //             backgroundColor:'red',
//   //             height:10,
//   //             width:10,
//   //             borderRadius:5,
//   //             marginHorizontal:6,
//   //             }}>
      
      
//   //           </View>
//   //           );

//   //       }
//   //     ;
//   //   });
//   // };

//   return (
//     <View style={{ flex: 1,backgroundColor:'white'}}>
//       <Text style={{ fontSize: 30}}></Text>
//       {/* <FlatList style={{backgroundColor:'red'}} 
//       data={carouselData}
//       ref={flatlistRef}
//       getItemLayout={getItemLayout}
//       renderItem={renderItem} 
//       keyExtractor={(item)=>item.id}
//       horizontal={true} 
//       pagingEnabled={true}
//       showsHorizontalScrollIndicator={false}
//       onScroll={handleScroll}/> */}
//       {/* <View style={{flexDirection:'row',justifyContent:'center',flex:15}}>{renderDotIndicators()}</View> */}
//     </View>
//   );

  
// }

const Menu=()=>{

    return(
     <View><Categories/></View>
 
    )
 

};
const Profile=()=>{

    return(
      <View><CardSlider/></View>
 
    )
 

};
const Wishlist=()=>{

    return(
     <Text>Login</Text>
 
    )
 

};
export default BottomTab