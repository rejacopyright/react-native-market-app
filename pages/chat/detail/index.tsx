import {
  OtherFileMessage,
  OtherTextMessage,
  SelfFileMessage,
  SelfTextMessage,
} from '@components/chat'
import { PageLoaderCircle } from '@components/loader'
import { GlobalStore } from '@config/stores'
import { FC, useContext, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import ChatDetailAppBar from './chatDetailAppBar'
import NewMessage from './newMessage'

const Index: FC<any> = ({ navigation: _ }) => {
  const stores: any = useContext(GlobalStore)
  const [loading, setLoading] = useState<any>(true)

  useEffect(() => {
    stores.setStore({ bottomNav: false })
    return () => {
      stores.setStore({ bottomNav: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) {
    return <PageLoaderCircle />
  }
  return (
    <>
      <ChatDetailAppBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode='never'
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <View style={{ paddingHorizontal: 10 }}>
          <OtherTextMessage message='Hi ...... !!!!!' />
          <OtherFileMessage />
          <SelfTextMessage message='Hallo Whatsapp ???' />
          <OtherTextMessage />
          <SelfFileMessage />
          <SelfTextMessage message='Thank you ???' />
        </View>
      </ScrollView>
      <NewMessage />
    </>
  )
}

export default Index
