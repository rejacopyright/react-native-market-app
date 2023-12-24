import colors from '@config/colors'
import { View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const SubmitCard = () => {
  return (
    <>
      <View
        style={{
          height: 50,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        }}>
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Row style={{ alignItems: 'center' }}>
            <Icon name='gift' size={25} color={colors.light.primary} />
            <Text
              style={{
                fontFamily: 'Quicksand-700',
                fontSize: 13,
                marginLeft: 7.5,
              }}>
              Voucher Code
            </Text>
          </Row>
          <View>
            <Row style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 13,
                  marginRight: 7.5,
                  lineHeight: 16,
                }}>
                Choose
              </Text>
              <Icon name='angle-right' size={20} color={colors.light.primary} />
            </Row>
          </View>
        </Row>
      </View>
      <View
        style={{
          height: 75,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }}>
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontFamily: 'Quicksand-700', fontSize: 13 }}>Total</Text>
            <Text
              style={{
                fontFamily: 'Quicksand-700',
                fontSize: 18,
                lineHeight: 22,
                color: colors.light.primary,
              }}>
              Rp. 23.675.000
            </Text>
          </View>
          <Button
            icon={() => <Icon name='check-circle' size={15} color='#fff' />}
            mode='contained'
            onPress={() => ''}
            labelStyle={{ fontFamily: 'Quicksand-700' }}>
            Checkout
          </Button>
        </Row>
      </View>
    </>
  )
}

export default SubmitCard
