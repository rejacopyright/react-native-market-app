import colors from '@config/colors'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'

const data: any = [
  {
    name: 'Payment',
    src: require('@assets/icons/wallet.png'),
  },
  {
    name: 'In Progress',
    src: require('@assets/icons/box.png'),
  },
  {
    name: 'On The Way',
    src: require('@assets/icons/scooter.png'),
  },
  {
    name: 'Review',
    src: require('@assets/icons/review.png'),
  },
]

const OrderStatus: FC<any> = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
      <Text style={{ fontFamily: 'Quicksand-700', flex: 1, marginBottom: 10 }}>Order Status</Text>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {data?.map(({ name, src }: any, idx: number) => (
          <View key={idx}>
            <View
              style={{
                backgroundColor: colors.light.primaryContainer,
                width: 65,
                height: 65,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: colors.light.primaryContainer2,
              }}>
              <Image source={src} style={{ width: 40, height: 40 }} />
            </View>
            <Text style={{ fontSize: 12, color: '#000', textAlign: 'center', marginTop: 5 }}>
              {name}
            </Text>
          </View>
        ))}
      </Row>
    </View>
  )
}

export default OrderStatus
