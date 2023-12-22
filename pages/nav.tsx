import colors from '@config/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavRoutes from '@routes/nav'
import { FC } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const Index: FC<any> = ({ navigation }) => {
  StatusBar.setBackgroundColor('pink', true)
  const colorScheme = useColorScheme()
  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: colors.dark }
      : { ...MD3LightTheme, colors: colors.light }
  return (
    <Tab.Navigator
      initialRouteName='Nav'
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
      {NavRoutes?.map(({ name, title, component, icon }, key: number) => (
        <Tab.Screen
          key={key}
          name={name}
          component={component}
          options={{
            // tabBarBadge: 2,
            // tabBarBadgeStyle: {
            //   backgroundColor: 'red',
            // },
            tabBarIcon: ({ color, focused, size }) => {
              return <Icon name={focused ? icon.active : icon.inactive} size={size} color={color} />
            },
            title,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default Index
