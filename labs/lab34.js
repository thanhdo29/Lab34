import { View, Text, TextInput, Image, Pressable, Alert, Button, Modal, StyleSheet, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function Lab34() {
  const [result, setResult] = useState('');
  const [result1, setResult1] = useState('');
  const [so1, setSo1] = useState('');
  const [so2, setSo2] = useState('');
  const [status, setStatus] = useState(false);
  const [status1, setStatus1] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, backgroundColor: '#F2B7B9', width: 'auto', borderColor: '#ED595E' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}>MÁY TÍNH ĐIỆN TỬ</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Số điện: </Text>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>{result}</Text>
      </View>
      <View style={styles.edt}>
        <TextInput placeholder='Nhập số thứ nhất' onChangeText={(so) => setSo1(so)} />
      </View>
      <View style={styles.edt}>
        <TextInput placeholder='Nhập số thứ hai' onChangeText={(so) => setSo2(so)} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          let sothunhat = parseInt(so1);
          let sothuhai = parseInt(so2);
          let kq = sothunhat + sothuhai;
          setResult(String(kq));
        }}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          let sothunhat = parseInt(so1);
          let sothuhai = parseInt(so2);
          let kq = sothunhat - sothuhai;
          Alert.alert(String(kq))
        }}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          let sothunhat = parseInt(so1);
          let sothuhai = parseInt(so2);
          let kq = sothunhat * sothuhai;
          console.log(String(kq));
        }}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          let sothunhat = parseInt(so1);
          let sothuhai = parseInt(so2);
          let kq = sothunhat / sothuhai;
          setStatus(true);
          setResult1(String(kq));
        }}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:70}}></View>
      <Pressable style={styles.btnGioithieu} onPress={()=> {setStatus1(true)}}>
        <Text>Giới thiệu</Text>
      </Pressable>
      <Modal animationType="slide"
        transparent={true}
        visible={status}
        onRequestClose={() => {setStatus(false) }}>
        <View style={styles.modal}>
          <View style={{ flexDirection: 'row',}}>
            <Text style={{ color: 'white' }}>Kết quả: </Text>
            <Text style={{ color: 'white' }}>{result1}</Text>
          </View>
          <TouchableOpacity style={styles.cancle} onPress={() => setStatus(false)}>
            <Text style={{ color: 'white' , fontSize:14, marginBottom:5}}>x</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal animationType="slide"
        transparent={true}
        visible={status1}
        onRequestClose={() => {setStatus1(false) }}>
        <View style={styles.gioithieu}>
          <View >
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white'}}>Họ tên: </Text>
              <Text style={{color:'white'}}>Đỗ Tuấn Thành</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white'}}>Quê quán: </Text>
              <Text style={{color:'white'}}>Thái Bình</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white'}}>Mã sinh viên: </Text>
              <Text style={{color:'white'}}>PH34899</Text>
            </View>
            
          </View>
          <View>
            <Image style={styles.img} source={require('../imgs/img_orange.webp')}/>
          </View>
          <TouchableOpacity style={styles.cancle} onPress={() => setStatus1(false)}>
            <Text style={{ color: 'white' , fontSize:14, marginBottom:5}}>x</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    marginHorizontal: 20,
    paddingTop: 12
  },
  edt: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 15,
    paddingLeft: 10
  },
  btn: {
    backgroundColor: '#88C6EC',
    borderWidth: 1,
    borderColor: '27A3F0',
    height: 40,
    width: '23%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6
  },
  modal: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems:'center',
    marginTop:'85%',
    left:'40%'
  },
  cancle:{
    position:'absolute',
    top:3, 
    right:7,
    borderWidth:1,
    borderColor:'white',
    borderRadius:50,
    width:24,
    height:24,
    alignItems:'center',
  },
  btnGioithieu:{
    backgroundColor: '#88C6EC',
    borderWidth: 1,
    borderColor: '27A3F0',
    height: 40,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gioithieu:{
    backgroundColor:'#9030EB',
    marginHorizontal:20,
    marginTop:'85%',
    paddingHorizontal:10,
    borderRadius:7,
    paddingVertical:8,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  img:{
    height:50,
    width:50,
    marginRight:30
  }
})