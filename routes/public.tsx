import { PageNotFound } from '@components/page'
import { lazy } from 'react'

const ProductDetail: any = lazy(() => import('@pages/product/detail'))
const Home: any = lazy(() => import('@pages/home'))
const Chat: any = lazy(() => import('@pages/chat'))
const Likes: any = lazy(() => import('@pages/likes'))
const Cart: any = lazy(() => import('@pages/cart'))
const Profile: any = lazy(() => import('@pages/profile'))
interface Props {
  component?: any
  path?: string
}

const publicRoutes: Array<Props> = [
  { path: '/', component: Home },
  { path: '/chat', component: Chat },
  { path: '/likes', component: Likes },
  { path: '/cart', component: Cart },
  { path: 'profile', component: Profile },
  { path: 'product/detail', component: ProductDetail },
  { path: '*', component: PageNotFound },
]

export default publicRoutes
