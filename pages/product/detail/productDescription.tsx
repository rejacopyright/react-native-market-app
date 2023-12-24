import { View } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'

const ProductDescription = () => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 20 }}>
      <Text style={{ fontFamily: 'Quicksand-700', fontSize: 16, marginBottom: 5 }}>
        Description
      </Text>
      <Text
        numberOfLines={2}
        style={{ fontFamily: 'Quicksand-600', fontSize: 12, marginBottom: 5 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <TouchableRipple
        rippleColor='rgba(0, 0, 0, .5)'
        style={{ backgroundColor: '#eee', paddingVertical: 5, marginTop: 5 }}>
        <Text
          style={{
            fontFamily: 'Quicksand-700',
            fontSize: 13,
            lineHeight: 16,
            textAlign: 'center',
          }}>
          Show more ...
        </Text>
      </TouchableRipple>
    </View>
  )
}

export default ProductDescription
