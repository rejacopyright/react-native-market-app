import { FC } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigate } from 'react-router-native'

const Index: FC<any> = ({ navigation: _ }) => {
  StatusBar.setBackgroundColor('pink', true)
  const navigate: any = useNavigate()
  return (
    <View style={styles.container}>
      <Button
        icon='home'
        mode='elevated'
        onPress={() => navigate('/product/detail')}
        // style={{ borderRadius: 5 }}
      >
        Go to Product Detail
      </Button>
      <Icon name='home' />
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
