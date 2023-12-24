import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export const PageLoaderCircle = () => {
  return (
    <View style={styles.pageLoader}>
      <ActivityIndicator animating={true} hidesWhenStopped={true} />
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
