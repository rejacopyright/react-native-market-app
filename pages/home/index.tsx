import { FC, useCallback, useEffect } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import HomeCategory from './homeCategory'
import HomeProduct from './homeProduct'
import HomeSlider from './homeSlider'

const Index: FC<any> = ({ navigation: _ }) => {
  useEffect(() => {
    StatusBar.setBackgroundColor('transparent', true)
    StatusBar.setBarStyle('dark-content')
    StatusBar.setTranslucent(true)
  }, [])
  const onScroll: any = useCallback((e: any) => {
    if (e?.nativeEvent?.contentOffset?.y > 50) {
      return StatusBar.setBackgroundColor('white', false)
    } else {
      return StatusBar.setBackgroundColor('transparent', false)
    }
  }, [])
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
        <HomeProduct />
      </View>
    </ScrollView>
  )
}

export default Index
