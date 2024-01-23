import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'

const Lab4_3 = () => {
  const[cover, setCover]=useState(false);
  const[pass,setPass]=useState('');
  const[statusPass, setStatusPass]=useState(true);
  const stylePass = () => {
    return cover ? 'text' : 'pass';
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontWeight:'bold', fontSize:30, color:'black'}}>Hi Welcom Back!</Text>
          <Text style={{color:'black'}}>Hello again you have been missed?</Text>

          <Text style={{marginTop:20}}>Email address</Text>
          <View style={styles.edt}>
            <TextInput placeholder='Enter your email address' />
          </View>
          <Text style={{marginTop:20}}>Password</Text>
          <View style={[styles.edt, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
            <TextInput  secureTextEntry={stylePass() === 'pass'} placeholder='Enter your password' onChangeText={(text)=>setPass(text) } value={pass}/>
            <TouchableOpacity onPress={()=> {setCover(!cover); setStatusPass(!statusPass)}}>
              <Image style={{ marginRight: 5 }} source={statusPass? require('../imgs/icon_eye_cover.png'): require('../imgs/icon_eye.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Lab4_3
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    paddingTop:20
  },
  edt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 7,
    borderRadius: 7,
    marginTop: 6
  }
})