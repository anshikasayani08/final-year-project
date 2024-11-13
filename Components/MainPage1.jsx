import React ,{useState,useEffect} from 'react'
import { Dimensions,Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Checkbox from 'expo-checkbox'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {styled} from 'nativewind';
const MainPage1 = () => {
    const navigation=useNavigation()
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [isChecked, setChecked] = useState(false);
    
    
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          source={{
            uri: "https://tasteofnovascotia.com/wp-content/uploads/2015/02/The-Canteen-logo.png",
          }}
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            marginTop: 60,
            backgroundColor: "white",
          }}
        />
        
        <View>
        <Text
            style={{
              color: "#5E5E5E",
              fontSize: 20,
              paddingStart: 25,
              
            }}
          >
            UserName
          </Text>
        <TextInput
          placeholder="Enter UserName"
          style={{
            color: "black",
            fontSize: 20,
            padding: 5,
            marginHorizontal: 20,
            
            borderWidth: 1,
            borderColor: "black",
            // textAlign: 'start',
            paddingStart: 20,
            borderRadius: 5,
          }}
          placeholderTextColor={"#00000033"}
          onChangeText={(text) => setName(text)}
          value={name}
        />
          <Text
            style={{
              color: "#5E5E5E",
              fontSize: 20,
              paddingStart: 25,
              marginTop: 20,
            }}
          >
            Email
          </Text>
        </View>
        <TextInput
          placeholder="Enter Email"
          style={{
            color: "black",
            fontSize: 20,
            padding: 5,
            marginHorizontal: 20,
            
            borderWidth: 1,
            borderColor: "black",
            // textAlign: 'start',
            paddingStart: 20,
            borderRadius: 5,
          }}
          placeholderTextColor={"#00000033"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View>
          <Text
            style={{
              color: "#5E5E5E",
              fontSize: 20,
              paddingStart: 25,
              marginTop: 20,
            }}
          >
            Password
            
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <TextInput
          placeholder="Enter Password"
          style={{
            color: "black",
            fontSize: 20,
            padding: 5,
            marginHorizontal: 20,
            borderColor:'black',
            borderWidth:1,
            paddingStart: 20,
            borderRadius: 5,
            flexDirection: "row",
            flex:1,
            justifyContent:'center',
            
          }}
          placeholderTextColor={"#00000033"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        </View >
        <View style={{alignItems:'flex-end',marginRight:25,marginTop:-30}}>
        <AntDesign name="eyeo" size={20} />
        </View>

        <View style={{ flex: 1, marginHorizontal: 16, marginVertical: 32 }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setChecked(!isChecked);
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Checkbox
              style={{ margin: 8 }}
              value={isChecked}
              onValueChange={setChecked}
            />
        
            <Text style={[{ fontSize: 20}]}>Remember me</Text>
          </TouchableOpacity>
        
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "black",
            width: 300,
            alignSelf: "center",
            marginVertical:50,
            padding: 10,
            borderRadius: 50,
          }}
          onPress={() =>  navigation.navigate("BottomTab")}
        >
         <Text className='done'>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
}


export default MainPage1