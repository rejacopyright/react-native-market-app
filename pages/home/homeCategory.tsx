import colors from '@config/colors'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const data: any = [
  {
    name: 'Jacket',
    src: require('@assets/icons/jacket.png'),
  },
  {
    name: 'Shirt',
    src: require('@assets/icons/shirt.png'),
  },
  {
    name: 'Pants',
    src: require('@assets/icons/pants.png'),
  },
  {
    name: 'Ransel',
    src: require('@assets/icons/ransel.png'),
  },
  {
    name: 'Accessories',
    src: require('@assets/icons/accessories.png'),
  },
]

const HomeCategory: FC<any> = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
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
        {data?.map(({ name, src }: any, idx: number) => (
          <View key={idx}>
            <View
              style={{
                backgroundColor: colors.light.primaryContainer,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderWidth: 0.25,
                borderColor: colors.light.primary,
              }}>
              <Image source={src} style={{ width: 30, height: 30 }} />
            </View>
            <Text style={{ fontSize: 10, color: '#000', textAlign: 'center', marginTop: 2.5 }}>
              {name}
            </Text>
          </View>
        ))}
      </Row>
    </View>
  )
}

export default HomeCategory
