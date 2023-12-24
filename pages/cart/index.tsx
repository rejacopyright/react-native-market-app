import { PageLoaderCircle } from '@components/loader'
import { GlobalStore } from '@config/stores'
import { productsList } from '@helpers/datas'
import { FC, useContext, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useNavigate } from 'react-router-native'

import CartItem, { CartUser } from './cartItem'
import SubmitCard from './submitCard'

const Index: FC<any> = ({ navigation: _ }) => {
  const navigate: any = useNavigate()
  const stores: any = useContext(GlobalStore)

  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<any>(true)

  useEffect(() => {
    stores.setStore({ bottomNav: false })
    return () => {
      stores.setStore({ bottomNav: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setData(productsList?.slice(2, productsList.length))
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) {
    return <PageLoaderCircle />
  }
  return (
    <>
      <Appbar.Header elevated style={{ backgroundColor: '#fff' }}>
        <Appbar.BackAction onPress={() => navigate(-1)} />
        <Appbar.Content title='Cart' titleStyle={{ fontSize: 18, lineHeight: 22 }} />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 10 }} />
        <View style={{ marginVertical: 15 }}>
          <CartUser data={{ name: 'Alpha Mart', badge: 'Super' }} />
          {data?.slice(0, 2)?.map((e: any, idx: number) => {
            return <CartItem key={idx} data={e} />
          })}
        </View>
        <View style={{ marginVertical: 15 }}>
          <CartUser data={{ name: 'Beta Mart', badge: 'Gold' }} />
          {data?.slice(2, 6)?.map((e: any, idx: number) => {
            return <CartItem key={idx} data={e} />
          })}
        </View>
      </ScrollView>
      <SubmitCard />
    </>
  )
}

export default Index
