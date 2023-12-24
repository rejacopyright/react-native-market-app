import colors from '@config/colors'
import { FC } from 'react'
import { View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'
import Icon from 'react-native-vector-icons/FontAwesome'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const ProductDetailPrice = () => {
  return (
    <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
      <Row
        style={{
          width: 'auto',
        }}>
        <Text
          style={{
            fontFamily: 'Quicksand-700',
            fontSize: 14,
            lineHeight: 16,
            color: colors.light.primary,
            backgroundColor: colors.light.primaryContainer,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 7.5,
          }}>
          Jacket
        </Text>
      </Row>
      <Row style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: 'Quicksand-700',
            fontSize: 22,
            lineHeight: 24,
            color: colors.light.primary,
          }}>
          Rp. 1.250.000
        </Text>
        <Text
          style={{
            fontFamily: 'Quicksand-700',
            fontSize: 14,
            lineHeight: 18,
            textDecorationLine: 'line-through',
            marginLeft: 10,
            color: '#555',
          }}>
          Rp. 1.750.000
        </Text>
      </Row>
      <Row style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Row>
          <AirbnbRating
            isDisabled
            showRating={false}
            count={5}
            defaultRating={4}
            size={18}
            unSelectedColor={'#ddd'}
            ratingContainerStyle={{
              alignSelf: 'center',
              marginTop: -2.5,
              marginHorizontal: -15,
              transform: [{ scale: 0.75 }],
            }}
          />
          <Text
            style={{
              fontFamily: 'Quicksand-700',
              lineHeight: 18,
              marginLeft: 5,
            }}>
            (297)
          </Text>
        </Row>
        <Row style={{ height: 'auto', justifyContent: 'center' }}>
          <Row
            style={{
              height: 'auto',
              alignItems: 'center',
              alignSelf: 'center',
              marginRight: 20,
            }}>
            <Icon name='check-circle' size={15} color='limegreen' />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 5,
                fontFamily: 'Quicksand-700',
              }}>
              668
            </Text>
          </Row>
          <Row style={{ height: 'auto', alignItems: 'center', alignSelf: 'center' }}>
            <Icon name='heart' size={15} color='orangered' />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 5,
                fontFamily: 'Quicksand-700',
              }}>
              2.1K
            </Text>
          </Row>
        </Row>
      </Row>
    </View>
  )
}

export default ProductDetailPrice
