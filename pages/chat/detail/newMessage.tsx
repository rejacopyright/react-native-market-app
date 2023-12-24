import colors from '@config/colors'
import { TextInput, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import Icon from 'react-native-vector-icons/FontAwesome'

const NewMessage = () => {
  return (
    <View
      style={{
        height: 85,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
      }}>
      <Col
        style={{
          paddingHorizontal: 10,
          marginVertical: 15,
          backgroundColor: '#f5f5f5',
          borderRadius: 50,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Row style={{ alignItems: 'center', alignSelf: 'center' }}>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name='paperclip' size={20} color='#000' />
          </View>
          <Col>
            <TextInput placeholder='Type Message...' />
          </Col>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: colors.light.primary,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name='send' size={16} color='#fff' />
          </View>
        </Row>
      </Col>
    </View>
  )
}

export default NewMessage
