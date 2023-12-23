import colors from '@config/colors'
import { FC } from 'react'
import { View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeCategory: FC<any> = () => {
  return (
    <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Quicksand-700', flex: 1 }}>Catogory</Text>
        <Row style={{ alignSelf: 'flex-end', alignItems: 'center', marginStart: 'auto', flex: 0 }}>
          <Text
            style={{
              fontFamily: 'Quicksand-700',
              fontSize: 11,
              marginRight: 10,
              color: 'cornflowerblue',
            }}>
            Show All
          </Text>
          <Icon name='angle-right' size={20} color='cornflowerblue' />
        </Row>
      </Row>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ backgroundColor: colors.light.primaryContainer }}>
          <Text style={{ fontFamily: 'Quicksand-700', flex: 1 }}>OK</Text>
        </View>
      </Row>
    </View>
  )
}

export default HomeCategory
