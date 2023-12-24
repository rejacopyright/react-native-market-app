import { PageLoaderCircle } from '@components/loader'
import { FC, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import ProductLastSeen from './lastSeen'
import OrderStatus from './orderStatus'
import ProfileCards from './profileCards'
import ProfileHeader from './profileHeader'

const Index: FC<any> = ({ navigation: _ }) => {
  const [loading, setLoading] = useState<any>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) {
    return <PageLoaderCircle />
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <ProfileHeader />
        <OrderStatus />
        <ProfileCards />
        <ProductLastSeen />
      </View>
    </ScrollView>
  )
}

export default Index
