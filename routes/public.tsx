import Home from '@pages/home'
import ProductDetail from '@pages/product/detail'
import Profile from '@pages/profile'
import glyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json'

interface Props {
  component?: any
  icon: {
    active: keyof typeof glyphMap
    inactive: keyof typeof glyphMap
  }
  name: string
  title: string
  path?: string
  children?: Array<Props>
}

const publicRoutes: Array<Props> = [
  {
    component: Home,
    icon: { active: 'home', inactive: 'home-outline' },
    path: '/',
    name: 'Home',
    title: 'Home',
  },
  {
    component: Profile,
    icon: { active: 'person', inactive: 'person-outline' },
    path: 'profile',
    name: 'Profile',
    title: 'Profile',
  },
  {
    component: ProductDetail,
    icon: { active: 'home', inactive: 'home-outline' },
    path: 'product/detail',
    name: 'Product Detail',
    title: 'Product Detail',
  },
]

export default publicRoutes
