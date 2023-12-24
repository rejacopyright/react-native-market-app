import colors from '@config/colors'
import { randomInt } from '@helpers'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'

const avatars: any = [
  require('@assets/icons/user_1.png'),
  require('@assets/icons/user_2.png'),
  require('@assets/icons/user_3.png'),
  require('@assets/icons/user_4.png'),
  require('@assets/icons/user_5.png'),
  require('@assets/icons/user_6.png'),
]
const images: any = [
  'https://rejacopyright.github.io/static/media/3.eea0aa8b.jpg',
  'https://rejacopyright.github.io/static/media/5.b2343a7b.jpg',
  'https://rejacopyright.github.io/static/media/4.61cb230d.jpg',
]
export const OtherTextMessage: FC<any> = ({ message }) => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Row>
        <Image
          source={avatars[randomInt(0, avatars.length - 1)]}
          style={{ width: 35, height: 35, borderRadius: 50, marginRight: 10 }}
        />
        <Col style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 11, lineHeight: 12 }}>Monday, 18 Mei 2025</Text>
          <Col>
            <Row
              style={{
                backgroundColor: colors.light.primaryContainer1,
                paddingHorizontal: 15,
                paddingBottom: 10,
                paddingTop: 5,
                minWidth: 25,
                marginTop: 3.5,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                // flex: 0,
                // flexBasis: 'auto',
                alignSelf: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontFamily: 'Quicksand-600',
                  // fontSize: 13,
                  // lineHeight: 18,
                  // marginBottom: 3,
                }}>
                {message ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </Text>
            </Row>
            <Text style={{ fontSize: 11, marginLeft: 15 }}>{randomInt(2, 60)} minutes</Text>
          </Col>
        </Col>
      </Row>
    </View>
  )
}

export const OtherFileMessage: FC<any> = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Row>
        <Image
          source={avatars[randomInt(0, avatars.length - 1)]}
          style={{ width: 35, height: 35, borderRadius: 50, marginRight: 10 }}
        />
        <Col>
          <Text style={{ fontSize: 11, lineHeight: 12 }}>Monday, 18 Mei 2025</Text>
          <Image
            source={{ uri: images[randomInt(0, images.length - 1)] }}
            style={{ width: 250, height: 250, borderRadius: 25, marginTop: 5 }}
          />
          <Text style={{ fontSize: 11, marginLeft: 15 }}>{randomInt(2, 60)} minutes</Text>
        </Col>
      </Row>
    </View>
  )
}

export const SelfTextMessage: FC<any> = ({ message }) => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Col style={{ marginLeft: 45, alignSelf: 'flex-end' }}>
        <Text style={{ fontSize: 11, lineHeight: 12, textAlign: 'right' }}>
          Monday, 18 Mei 2025
        </Text>
        <Col>
          <Row
            style={{
              backgroundColor: colors.light.primary,
              paddingHorizontal: 15,
              paddingBottom: 10,
              paddingTop: 5,
              minWidth: 25,
              marginTop: 3.5,
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              // flex: 0,
              // flexBasis: 'auto',
              alignSelf: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontFamily: 'Quicksand-600',
                color: '#fff',
                // fontSize: 13,
                // lineHeight: 18,
                // marginBottom: 3,
              }}>
              {message ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </Text>
          </Row>
          <Text style={{ fontSize: 11, marginRight: 15, textAlign: 'right' }}>
            {randomInt(2, 60)} minutes
          </Text>
        </Col>
      </Col>
    </View>
  )
}

export const SelfFileMessage: FC<any> = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Col style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 11, lineHeight: 12 }}>Monday, 18 Mei 2025</Text>
        <Image
          source={{ uri: images[randomInt(0, images.length - 1)] }}
          style={{ width: 250, height: 250, borderRadius: 25, marginTop: 5 }}
        />
        <Text style={{ fontSize: 11, marginRight: 15 }}>{randomInt(2, 60)} minutes</Text>
      </Col>
    </View>
  )
}
