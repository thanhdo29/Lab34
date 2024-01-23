import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


const Lab4_1 = () => {
  type ContactType = {
    name: string,
    email: string,
    position: string,
    photo: string,
  }
  const DATA =
    [
      { name: 'Đỗ Tuấn Thành', email: 'thanhdt@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Lương Văn Ngọc', email: 'ngoclv@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Đỗ Xuân Đức', email: 'ducdx@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Đào Ngọc Lâm', email: 'lamdn@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Lưu Bảo Phúc', email: 'phuclb@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Lưu Quang Vinh', email: 'vinhlq@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Hoàng Duy An', email: 'andh@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Vũ Tiến Đạt', email: 'datvt@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') },
      { name: 'Trần Thế Nam', email: 'namtt@gmail.com', position: 'Thái Bình', photo: require('../imgs/avatar.png') }
    ]

  const ContactItem = ({ contact }: { contact: ContactType }) => {
    return (
      <View style={{marginTop:10}}>
        <View style={styles.listItem}>
          <Image source={contact.photo} style={styles.avatar} />
          <View style={styles.bodyItem}>
            <Text style={styles.nameText}>{contact.name}</Text>
            <Text>{contact.email}</Text>
          </View>
          <TouchableOpacity style={styles.btnCall}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop:10
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50
  },
  listItem: {
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:12
  },
  bodyItem: {

  },
  nameText: {
    fontWeight: 'bold'
  },
  btnCall: {

  },
  callText: {
    color: '#5BC945'
  }
})

export default Lab4_1