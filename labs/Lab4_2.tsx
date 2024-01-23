import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, RefreshControl } from 'react-native';

const Lab4_2 = () => {
  const [barStyle, setBarStyle] = useState<import('react-native').StatusBarStyle>('light-content');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setBarStyle('light-content');
    setTimeout(() => {
      setRefreshing(false);
      setBarStyle('dark-content');
    }, 1000); 
  };
  return (
    <View style={{paddingTop:22}}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <StatusBar  barStyle={barStyle} translucent backgroundColor="blue" />
        <Text style={{textAlign:'center'}}>Kéo xuống để đổi màu StatusBar</Text>
      </ScrollView>
    </View>
  );
};

export default Lab4_2;
