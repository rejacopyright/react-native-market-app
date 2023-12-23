import { FlatListSlider } from '@components/slider'
import { productsList } from '@helpers/datas'
import { FC } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'

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
const Index: FC<any> = ({ navigation: _ }) => {
  StatusBar.setBackgroundColor('white', true)
  const deviceWidth: any = Math.floor(Dimensions.get('window').width)
  const gridX: any = deviceWidth / 2 - 5
  return (
    <ScrollView
      overScrollMode='never'
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}>
      <FlatListSlider
        datas={images}
        height={100}
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
      <View>
        <Grid style={{ flexWrap: 'wrap', padding: 5 }}>
          {productsList.map(({ name, price, src }: any, index: number) => (
            <Col key={index} style={{ flexWrap: 'wrap', width: gridX, height: gridX + 50 }}>
              <View style={styles.card}>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => ''}
                  style={[styles.cardContent, styles.shadow]}>
                  <Image
                    style={[
                      {
                        height: gridX - 50,
                        width: gridX - 50,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                        marginTop: 15,
                        marginBottom: 5,
                        borderRadius: 15,
                      },
                    ]}
                    source={{ uri: src }}
                  />
                  <View style={{ paddingHorizontal: 15 }}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 12,
                        fontWeight: 'normal',
                        // fontFamily: 'Comfortaa-Bold',
                      }}>
                      {price}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#000',
                        fontSize: 11,
                        flexWrap: 'nowrap',
                        fontWeight: 'bold',
                        // fontFamily: 'Comfortaa-Regular',
                      }}>
                      {name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Col>
          ))}
        </Grid>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  contentStyle: {
    gap: 0,
    // marginHorizontal: -10,
  },
  itemStyle: {
    // marginHorizontal: 5,
  },
  shadow: {
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 7.5,
  },
})

export default Index
