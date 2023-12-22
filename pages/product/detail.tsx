import { FC } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Index: FC<any> = ({ navigation }) => {
  StatusBar.setBackgroundColor('pink', true)
  return (
    <>
      <View style={styles.container}>
        <Text>Product Detail</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export default Index
