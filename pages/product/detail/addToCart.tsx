import colors from '@config/colors'
import { Image, TouchableOpacity, View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigate } from 'react-router-native'

const AddToCart = () => {
  const navigate: any = useNavigate()
  return (
    <View style={{ height: 60, borderTopWidth: 1, borderTopColor: '#eee', paddingHorizontal: 15 }}>
      <Row style={{ alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/profile')}>
          <Image
            source={require('@assets/icons/user_5.png')}
            style={{ width: 30, height: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
        <View style={{ width: 3, backgroundColor: '#f5f5f5', height: 30, marginHorizontal: 15 }} />
        <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('/chat/detail')}>
          <View
            style={{
              width: 'auto',
              backgroundColor: colors.light.primaryContainer1,
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.light.primaryContainer3,
            }}>
            <Icon name='chatbox-ellipses' color={colors.light.primary} size={22} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigate('/cart')}
          style={{ marginLeft: 'auto' }}>
          <View
            style={{
              backgroundColor: colors.light.primary,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Quicksand-700',
                fontSize: 14,
                lineHeight: 16,
                color: '#fff',
              }}>
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </Row>
    </View>
  )
}

export default AddToCart
