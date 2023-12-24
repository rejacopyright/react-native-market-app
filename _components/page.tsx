import colors from '@config/colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PageNotFound = () => {
  return (
    <View style={styles.pageLoader}>
      <Text style={{ fontSize: 50, color: colors.light.primary }}>404</Text>
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
