import { FC, useCallback, useEffect } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'

import ProfileHeader from './profileHeader'

const Index: FC<any> = ({ navigation: _ }) => {
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
  return (
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      overScrollMode='never'
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}>
      <View>
        <ProfileHeader />
      </View>
    </ScrollView>
  )
}

export default Index
