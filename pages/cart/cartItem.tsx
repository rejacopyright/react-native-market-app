import colors from '@config/colors'
import { randomInt } from '@helpers'
import { FC, useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigate } from 'react-router-native'

const CartItem: FC<any> = ({ data }) => {
  const navigate: any = useNavigate()
  const [item, setItem] = useState<any>({})
  const isChecked: any = randomInt(1, 2) === 1
  useEffect(() => {
    setItem(data)
  }, [data])
  return (
    <TouchableRipple
      rippleColor='rgba(0, 0, 0, .05)'
      onPress={() => navigate('/product/detail')}
      style={{ paddingHorizontal: 15 }}>
      <View
        style={{
          // elevation: 2,
          marginVertical: 7.5,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <Row style={{ alignItems: 'center' }}>
          <FAIcon
            name='check-circle'
            size={20}
            color={isChecked ? colors.light.primary : '#ddd'}
            style={{ marginRight: 10 }}
          />
          {item?.src ? (
            <Image
              source={{ uri: item?.src }}
              style={{ width: 60, height: 60, marginRight: 10, borderRadius: 10 }}
            />
          ) : (
            <View
              style={{
                width: 60,
                height: 60,
                marginRight: 10,
                borderRadius: 10,
                backgroundColor: '#eee',
              }}
            />
          )}

          <Col style={{ justifyContent: 'space-between' }}>
            <Text
              numberOfLines={2}
              style={{ fontFamily: 'Quicksand-600', fontSize: 12, lineHeight: 14 }}>
              {item?.name}
            </Text>
            <Row style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Quicksand-700', fontSize: 14, lineHeight: 18 }}>
                {item?.price}
              </Text>
              <View
                style={{
                  backgroundColor: '#f5f5f5',
                  paddingHorizontal: 5,
                  paddingVertical: 2.5,
                  borderRadius: 10,
                }}>
                <Row style={{ height: 'auto', alignItems: 'center' }}>
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: colors.light.primary,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name='plus' color='#fff' />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Quicksand-700',
                      fontSize: 14,
                      lineHeight: 18,
                      marginHorizontal: 10,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: '#ddd',
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name='minus' color='#000' />
                  </View>
                </Row>
              </View>
            </Row>
          </Col>
        </Row>
      </View>
    </TouchableRipple>
  )
}

const avatars: any = [
  require('@assets/icons/user_1.png'),
  require('@assets/icons/user_2.png'),
  require('@assets/icons/user_3.png'),
  require('@assets/icons/user_4.png'),
  require('@assets/icons/user_5.png'),
]
export const CartUser: FC<any> = ({ data }) => {
  const [user, setUser] = useState<any>({})
  useEffect(() => {
    setUser(data)
  }, [data])
  return (
    <Row style={{ paddingHorizontal: 15, marginBottom: 5 }}>
      <Image
        source={avatars[randomInt(0, avatars.length - 1)]}
        style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }}
      />
      <Col>
        <Text
          style={{
            fontFamily: 'Quicksand-700',
            fontSize: 16,
            lineHeight: 18,
          }}>
          {user?.name}
        </Text>
        <View>
          <Text
            style={{
              fontFamily: 'Quicksand-600',
              fontSize: 12,
              lineHeight: 14,
            }}>
            {user?.badge}
          </Text>
        </View>
      </Col>
    </Row>
  )
}

export default CartItem
