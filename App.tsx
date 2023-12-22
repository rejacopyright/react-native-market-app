import colors from '@config/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicRoutes from '@routes/public'
import { FC } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper'

// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const App: FC<any> = ({ navigation }) => {
  const colorScheme = useColorScheme()
  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: colors.dark }
      : { ...MD3LightTheme, colors: colors.light }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <PaperProvider
        theme={paperTheme}
        settings={
          {
            // icon: (props: any) => <Icon {...props} />,
          }
        }>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={() => {
              // StatusBar.pushStackEntry({
              //   backgroundColor: 'blue',
              //   hidden: false,
              //   barStyle: 'light-content',
              // })
              return {
                headerShown: false,
                lazy: true,
                // freezeOnBlur: true,
                tabBarActiveTintColor: paperTheme.colors.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: true,
                unmountOnBlur: true,
              }
            }}>
            {/* <Stack.Screen name='Nav' component={NavPage} /> */}
            {PublicRoutes?.map(({ name, title, component, icon }, key: number) => (
              <Stack.Screen key={key} name={name} component={component} />
            ))}
          </Stack.Navigator>
          <Row
            style={{
              flexWrap: 'nowrap',
              height: 'auto',
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                console.log(Stack)
                navigation?.navigate('Home')
              }}>
              <Text>NAV</Text>
            </TouchableOpacity>
            <Col style={{ alignItems: 'center' }} />
            <Col style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation?.navigate('Profile')}>
                <Text>NAV</Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // tabBarStyle: {
  //   padding: 10,
  // },
})

export default App
