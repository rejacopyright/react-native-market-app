import { FlatListSlider } from '@components/slider'
import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Row } from 'react-native-easy-grid'

const images: any = [
  {
    image: 'https://rejacopyright.github.io/static/media/3.eea0aa8b.jpg',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    image: 'https://rejacopyright.github.io/static/media/5.b2343a7b.jpg',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image: 'https://rejacopyright.github.io/static/media/4.61cb230d.jpg',
    desc: 'Sample Description below the image for representation purpose only',
  },
]

const ProductSlider: FC<any> = () => {
  return (
    <>
      <FlatListSlider
        datas={images}
        height={400}
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
      <Row style={{ paddingHorizontal: 5 }}>
        {images?.map(({ image }: any, idx: number) => {
          return (
            <View key={idx} style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
              <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 5 }} />
            </View>
          )
        })}
      </Row>
    </>
  )
}

export default ProductSlider

const styles = StyleSheet.create({
  contentStyle: {
    gap: 0,
    // marginHorizontal: -10,
  },
  itemStyle: {
    // marginHorizontal: 5,
  },
})
