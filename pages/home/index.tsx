import { PageLoaderCircle } from '@components/loader'
import { FC, useCallback, useEffect, useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import HomeCategory from './homeCategory'
import HomeProduct from './homeProduct'
import HomeSlider from './homeSlider'
import HomeTopUser from './homeTopUser'

const Index: FC<any> = ({ navigation: _ }) => {
  const [loading, setLoading] = useState<any>(true)
  StatusBar.setTranslucent(true)
  useEffect(() => {
    StatusBar.setBackgroundColor('transparent', false)
    StatusBar.setBarStyle('dark-content')
    return () => {
      StatusBar.setTranslucent(false)
      StatusBar.setBackgroundColor('white', false)
    }
  }, [])
  const onScroll: any = useCallback((e: any) => {
    if (e?.nativeEvent?.contentOffset?.y > 50) {
      return StatusBar.setBackgroundColor('white', false)
    } else {
      return StatusBar.setBackgroundColor('transparent', false)
    }
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
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      overScrollMode='never'
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}>
      <View>
        <HomeSlider />
        <HomeCategory />
        <HomeTopUser />
        <HomeProduct />
      </View>
    </ScrollView>
  )
}

export default Index
