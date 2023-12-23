import { FlatListSlider } from '@components/slider'
import { FC } from 'react'
import { StyleSheet } from 'react-native'

const images: any = [
  {
    image: 'https://rejacopyright.github.io/static/media/header_1.8e80fce0.jpg',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    image: 'https://rejacopyright.github.io/static/media/header_3.f1a15715.jpg',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image: 'https://rejacopyright.github.io/static/media/header_4.d3602a1d.jpg',
    desc: 'Sample Description below the image for representation purpose only',
  },
]

const HomeSlider: FC<any> = () => {
  return (
    <FlatListSlider
      datas={images}
      height={150}
      timer={2000}
      onPress={(_item: any) => ''}
      indicatorContainerStyle={{ position: 'absolute', bottom: '10%' }}
      indicatorActiveColor={'#fff'}
      indicatorInActiveColor={'#ffffff'}
      indicatorActiveWidth={15}
      animation
      // width={300}
      contentContainerStyle={styles.contentStyle}
      itemStyle={styles.itemStyle}
    />
  )
}

export default HomeSlider

const styles = StyleSheet.create({
  contentStyle: {
    gap: 0,
    // marginHorizontal: -10,
  },
  itemStyle: {
    // marginHorizontal: 5,
  },
})
