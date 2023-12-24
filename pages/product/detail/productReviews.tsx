import colors from '@config/colors'
import { randomInt } from '@helpers'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text, TouchableRipple } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const avatars: any = [
  require('@assets/icons/user_1.png'),
  require('@assets/icons/user_2.png'),
  require('@assets/icons/user_3.png'),
  require('@assets/icons/user_4.png'),
  require('@assets/icons/user_5.png'),
]
const ProductReviews = () => {
  return (
    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
      <Text style={{ fontFamily: 'Quicksand-700', fontSize: 16, marginBottom: 10 }}>Reviews</Text>
      {avatars?.map((image: any, idx: number) => {
        const rating: number = randomInt(1, 5)
        return (
          <View key={idx} style={{ marginVertical: 10 }}>
            <Row>
              <Image
                source={image}
                style={{ width: 25, height: 25, borderRadius: 50, marginRight: 10 }}
              />
              <Col>
                <Text style={{ fontFamily: 'Quicksand-700', lineHeight: 16 }}>Reja Jamil</Text>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Row>
                    <AirbnbRating
                      isDisabled
                      showRating={false}
                      count={5}
                      defaultRating={rating}
                      size={20}
                      unSelectedColor={'#ddd'}
                      ratingContainerStyle={{
                        marginVertical: -2.5,
                        marginLeft: -35,
                        marginRight: -28,
                        transform: [{ scale: 0.5 }],
                      }}
                    />
                    <Text style={{ fontFamily: 'Quicksand-700', lineHeight: 18, fontSize: 12 }}>
                      {rating}.0
                    </Text>
                  </Row>
                  <Text style={{ fontSize: 12, alignSelf: 'flex-end' }}>
                    {randomInt(2, 23)} hours ago
                  </Text>
                </Row>
              </Col>
            </Row>
            <Text
              numberOfLines={2}
              style={{ fontFamily: 'Quicksand-600', fontSize: 12, marginBottom: 5 }}>
              Labore et dolore magna aliqua. enim ad minim venam, quisso nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        )
      })}
      <Row style={{ justifyContent: 'center' }}>
        <TouchableRipple
          rippleColor='rgba(0, 0, 0, .5)'
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginTop: 5,
            backgroundColor: colors.light.primaryContainer,
          }}>
          <Text
            style={{
              fontFamily: 'Quicksand-700',
              fontSize: 13,
              lineHeight: 16,
              color: colors.light.primary,
            }}>
            All Reviews ...
          </Text>
        </TouchableRipple>
      </Row>
    </View>
  )
}

export default ProductReviews
