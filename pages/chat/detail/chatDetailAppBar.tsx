import { Image, TouchableOpacity, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Appbar, Text } from 'react-native-paper'
import { useNavigate } from 'react-router-native'

const ChatDetailAppBar = () => {
  const navigate: any = useNavigate()
  return (
    <Appbar.Header elevated style={{ backgroundColor: '#fff' }}>
      <Appbar.BackAction onPress={() => navigate(-1)} />
      <Row style={{ alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/profile')}>
          <Image
            source={require('@assets/icons/user_5.png')}
            style={{ width: 35, height: 35, borderRadius: 50, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Col>
          <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/profile')}>
            <Text
              style={{
                fontFamily: 'Quicksand-700',
                fontSize: 16,
                lineHeight: 18,
              }}>
              Reja Jamil
            </Text>
          </TouchableOpacity>
          <Row style={{ height: 'auto', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/profile')}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  marginRight: 2.5,
                  backgroundColor: 'mediumseagreen',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/profile')}>
              <Text
                style={{
                  fontFamily: 'Quicksand-600',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Online
              </Text>
            </TouchableOpacity>
          </Row>
        </Col>
      </Row>
    </Appbar.Header>
  )
}

export default ChatDetailAppBar
