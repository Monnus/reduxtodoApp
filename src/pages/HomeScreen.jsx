
import React from 'react';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    </View>
    </SafeAreaView>
  );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      