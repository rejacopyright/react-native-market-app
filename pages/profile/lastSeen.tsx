import { productsList } from '@helpers/datas'
import React, { FC, useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'
import Icon from 'react-native-vector-icons/FontAwesome'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const ProductLastSeen: FC<any> = () => {
  const deviceWidth: any = Math.floor(Dimensions.get('window').width)
  const gridX: any = deviceWidth / 3

  const [data, setData] = useState<any>([])

  useEffect(() => {
    setData(productsList?.slice(2, 7))
  }, [])

  return (
    <View style={{ marginBottom: 20 }}>
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
          marginTop: 25,
          paddingHorizontal: 20,
        }}>
        <Text style={{ fontFamily: 'Quicksand-700', flex: 1 }}>Last Seen</Text>
        <Row style={{ alignSelf: 'flex-end', alignItems: 'center', marginStart: 'auto', flex: 0 }}>
          <Text
            style={{
              fontFamily: 'Quicksand-700',
              fontSize: 11,
              marginRight: 10,
              color: 'cornflowerblue',
            }}>
            Show All
          </Text>
          <Icon name='angle-right' size={20} color='cornflowerblue' />
        </Row>
      </Row>
      <Grid style={{ flexWrap: 'wrap' }}>
        <FlatList
          overScrollMode='never'
          style={{ paddingLeft: 0 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item, index }: any) => (
            <Col
              key={index}
              style={{
                flexWrap: 'wrap',
                width: gridX - 20,
                height: gridX + 35,
                marginLeft: index === 0 ? 15 : 0,
                marginRight: index === data?.length - 1 ? 15 : 0,
              }}>
              <View style={styles.card}>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => ''}
                  style={[styles.cardContent, styles.shadow]}>
                  <Image
                    style={[
                      {
                        height: 85,
                        width: 85,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                        marginTop: 15,
                        marginBottom: 5,
                        borderRadius: 15,
                      },
                    ]}
                    source={{ uri: item?.src }}
                  />
                  <View style={{ paddingHorizontal: 15 }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: '#000',
                        fontSize: 10,
                        lineHeight: 12,
                        flexWrap: 'nowrap',
                        textAlign: 'center',
                        fontFamily: 'Quicksand-600',
                        marginBottom: 2.5,
                      }}>
                      {item?.name}
                    </Text>
                    <AirbnbRating
                      isDisabled
                      showRating={false}
                      count={5}
                      defaultRating={item?.rating}
                      size={20}
                      unSelectedColor={'#ddd'}
                      ratingContainerStyle={{
                        marginVertical: -5,
                        marginLeft: 15,
                        transform: [{ scale: 0.5 }],
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Col>
          )}
        />
      </Grid>
    </View>
  )
}

export default ProductLastSeen

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    paddingHorizontal: 2.5,
    paddingVertical: 5,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 7.5,
  },
})
