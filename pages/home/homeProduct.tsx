import { productsList } from '@helpers/datas'
import React, { FC } from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'
import Icon from 'react-native-vector-icons/FontAwesome'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const HomeProduct: FC<any> = () => {
  const deviceWidth: any = Math.floor(Dimensions.get('window').width)
  const gridX: any = deviceWidth / 2 - 5
  return (
    <Grid style={{ flexWrap: 'wrap', padding: 5 }}>
      {productsList?.slice(0, 6)?.map(({ name, price, src, rating, sold }: any, index: number) => (
        <Col
          key={index}
          style={{
            flexWrap: 'wrap',
            width: gridX,
            height: gridX + 80,
          }}>
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
                    fontSize: 14,
                    fontFamily: 'Quicksand-700',
                    textAlign: 'center',
                  }}>
                  {price}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#000',
                    fontSize: 11,
                    flexWrap: 'nowrap',
                    textAlign: 'center',
                  }}>
                  {name}
                </Text>
                <AirbnbRating
                  isDisabled
                  showRating={false}
                  count={5}
                  defaultRating={rating}
                  size={20}
                  unSelectedColor={'#ddd'}
                  ratingContainerStyle={{ marginTop: -2.5, transform: [{ scale: 0.5 }] }}
                />
                <Row style={{ height: 'auto', justifyContent: 'center' }}>
                  <Row
                    style={{
                      height: 'auto',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginRight: 15,
                    }}>
                    <Icon name='check-circle' size={10} color='limegreen' />
                    <Text style={{ fontSize: 10, lineHeight: 13, marginLeft: 2.5 }}>{sold}</Text>
                  </Row>
                  <Row style={{ height: 'auto', alignItems: 'center', alignSelf: 'center' }}>
                    <Icon name='heart' size={10} color='orangered' />
                    <Text style={{ fontSize: 10, lineHeight: 13, marginLeft: 2.5 }}>{sold}</Text>
                  </Row>
                </Row>
              </View>
            </TouchableOpacity>
          </View>
        </Col>
      ))}
    </Grid>
  )
}

export default HomeProduct

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
  shadow: {
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 7.5,
  },
})
