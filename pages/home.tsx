import { FC, useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Index: FC<any> = ({ navigation }) => {
  StatusBar.setBackgroundColor('pink', true)
  const [count, setCount] = useState<any>(0)
  const onPress = () => setCount((prevCount: any) => prevCount + 1)
  console.log('hoooooooooome')
  return (
    <View style={styles.container}>
      <Text>Homes</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>My Components</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})

export default Index
