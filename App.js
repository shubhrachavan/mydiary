import React,{Component} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import Welcome from "./screens/welcome";
import Login from "./screens/login";
import Home from "./screens/home";

export default class App extends Component{
  render(){
    return(
      <View>
     <Welcome/>
      </View>
    )
  }
}
