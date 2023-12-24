import Home from '@pages/home'
import Profile from '@pages/profile'
import glyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json'
// import glyphMap from 'react-native-vector-icons/glyphmaps/AntDesign.json'

interface Props {
  component: any
  icon: {
    active: keyof typeof glyphMap
    inactive: keyof typeof glyphMap
  }
  name: string
  title: string
}

const publicRoutes: Array<Props> = [
  {
    component: Home,
    icon: { active: 'home', inactive: 'home-outline' },
    name: 'Home',
    title: 'Home',
  },
  {
    component: Profile,
    icon: { active: 'person', inactive: 'person-outline' },
    name: 'Profile',
    title: 'Profile',
  },
]

export default publicRoutes
