import { FC } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

const Index: FC<any> = ({ navigation }) => {
  StatusBar.setBackgroundColor('pink', true)
  return (
    <View style={styles.container}>
      <Button
        icon='home'
        mode='contained'
        onPress={() => navigation?.navigate('Product Detail')}
        // style={{ borderRadius: 5 }}
      >
        Go to Homes
      </Button>
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
})

export default Index
