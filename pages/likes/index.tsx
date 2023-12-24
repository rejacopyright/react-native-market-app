import { PageLoaderCircle } from '@components/loader'
import { productsList } from '@helpers/datas'
import { FC, useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text, TouchableRipple } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'
import Icon from 'react-native-vector-icons/FontAwesome'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const Index: FC<any> = ({ navigation: _ }) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<any>(true)

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
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 20 }} />
        {data?.map(({ name, src, rating, price, sold, likes }: any, idx: number) => {
          return (
            <TouchableRipple
              key={idx}
              rippleColor='rgba(0, 0, 0, .05)'
              onPress={() => ''}
              style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
              <Row>
                <Image
                  source={{ uri: src }}
                  style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }}
                />
                <Col style={{ justifyContent: 'space-between' }}>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{ fontFamily: 'Quicksand-600', fontSize: 13, lineHeight: 18 }}>
                      {name}
                    </Text>
                    <AirbnbRating
                      isDisabled
                      showRating={false}
                      count={5}
                      defaultRating={rating}
                      size={20}
                      unSelectedColor={'#ddd'}
                      ratingContainerStyle={{
                        alignSelf: 'flex-start',
                        alignContent: 'flex-start',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginTop: -2.5,
                        marginLeft: -35,
                        transform: [{ scale: 0.5 }],
                      }}
                    />
                    <Text style={{ fontFamily: 'Quicksand-700', fontSize: 14, lineHeight: 18 }}>
                      {price}
                    </Text>
                  </View>
                  <Row style={{ height: 'auto' }}>
                    <Row
                      style={{
                        height: 'auto',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginRight: 15,
                      }}>
                      <Icon name='check-circle' size={10} color='limegreen' />
                      <Text
                        style={{
                          fontSize: 10,
                          lineHeight: 13,
                          marginLeft: 2.5,
                          fontFamily: 'Quicksand-700',
                        }}>
                        {sold}
                      </Text>
                    </Row>
                    <Row style={{ height: 'auto', alignItems: 'center', alignSelf: 'center' }}>
                      <Icon name='heart' size={10} color='orangered' />
                      <Text
                        style={{
                          fontSize: 10,
                          lineHeight: 13,
                          marginLeft: 2.5,
                          fontFamily: 'Quicksand-700',
                        }}>
                        {likes}
                      </Text>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </TouchableRipple>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
