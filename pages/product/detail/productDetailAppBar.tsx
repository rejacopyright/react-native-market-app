import { Image, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Appbar, Text } from 'react-native-paper'
import { useNavigate } from 'react-router-native'

const ProductDetailAppBar = () => {
  const navigate: any = useNavigate()
  return (
    <Appbar.Header elevated style={{ backgroundColor: '#fff' }}>
      <Appbar.BackAction onPress={() => navigate(-1)} />
      <Row style={{ alignItems: 'center' }}>
        <Image
          source={require('@assets/icons/user_5.png')}
          style={{ width: 35, height: 35, borderRadius: 50, marginRight: 10 }}
        />
        <Col>
          <Text
            style={{
              fontFamily: 'Quicksand-700',
              fontSize: 16,
              lineHeight: 18,
            }}>
            Reja Jamil
          </Text>
          <View>
            <Text
              style={{
                fontFamily: 'Quicksand-600',
                fontSize: 12,
                lineHeight: 14,
              }}>
              Platinum
            </Text>
          </View>
        </Col>
      </Row>
    </Appbar.Header>
  )
}

export default ProductDetailAppBar
