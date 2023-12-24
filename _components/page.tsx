import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PageNotFound = () => {
  return (
    <View style={styles.pageLoader}>
      <Text>Page Not Found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pageLoader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})
