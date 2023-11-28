import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-web";

const ScreenLogin = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = async() =>{
    const response = await fetch("http://localhost:3000/user",{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    if(response.ok){
        const data = await response.json();
        const user = data.find(
            (user) => user.username === username && user.password ===password)
            if(user){
                console.log("True")
                navigation.navigate('ScreenHome',{user})
            }else{
                console.log("User name Password Failed")
            }
        
    }else{
        console.log("Failed to fetch data")
    }
  }

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 50 }}
    >
      <Text>Login</Text>
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          borderColor: "black",
          marginTop: 20,
        }}
        placeholder="User Name"
        value = {username}
        onChangeText = {(text)=>{
            setUsername(text)
        }}
      />
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          borderColor: "black",
          marginTop: 20,
        }}
        placeholder="Password"
        value = {password}
        onChangeText = {(text)=>{
            setPassword(text)
        }}
      />
      <Pressable
        style={{
          marginTop: 20,
          width: 150,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          backgroundColor: "green",
        }}
        onPress={login}
        
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default ScreenLogin;
