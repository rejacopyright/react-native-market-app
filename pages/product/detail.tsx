import { FC } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useNavigate } from 'react-router-native'

const Index: FC<any> = ({ navigation: _ }) => {
  StatusBar.setBackgroundColor('blue', true)
  const navigate: any = useNavigate()
  return (
    <>
      <View style={styles.container}>
        <Text>Product Detail</Text>
        <Button
          icon='home'
          mode='contained'
          onPress={() => navigate(-1)}
          // style={{ borderRadius: 5 }}
        >
          Back
        </Button>
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
