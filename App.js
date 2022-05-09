import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator.js'
   import TabNavigator from './navigation/TabNavigator.js'
import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'

export default function App(){
  return (
    <SafeAreaView>
      <NavigationContainer>
          <DrawerNavigator/>
          <TabNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
