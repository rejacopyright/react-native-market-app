import colors from '@config/colors'
import { Image, StyleSheet, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'

const ProfileCards = () => {
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 35 }}>
      <Row>
        <Col>
          <View style={styles.cardContainer}>
            <Image source={require('@assets/images/shape_3.png')} style={styles.bgImage} />
            <View style={styles.cardBadge}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Quicksand-700',
                  lineHeight: 12,
                  color: '#fff',
                }}>
                Balance
              </Text>
            </View>
            <Row style={{ alignItems: 'flex-end', padding: 10, justifyContent: 'space-between' }}>
              <Text style={{ color: '#fff', fontFamily: 'Quicksand-600', fontSize: 14 }}>
                Rp. 1.920.000
              </Text>
              <IonIcon name='wallet' color='#fff' size={25} />
            </Row>
          </View>
        </Col>
        <Col>
          <View style={styles.cardContainer}>
            <Image source={require('@assets/images/shape_3.png')} style={styles.bgImage} />
            <Row style={{ alignItems: 'center', padding: 15, justifyContent: 'space-between' }}>
              <Row style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Quicksand-600',
                    fontSize: 35,
                    lineHeight: 40,
                    marginRight: 5,
                  }}>
                  19
                </Text>
                <Col style={{ justifyContent: 'space-between' }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Quicksand-600',
                      fontSize: 12,
                      lineHeight: 14,
                    }}>
                    Order
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Quicksand-600',
                      fontSize: 12,
                      lineHeight: 14,
                    }}>
                    Success
                  </Text>
                </Col>
              </Row>
              <FAIcon name='check-circle' color='#fff' size={25} />
            </Row>
          </View>
        </Col>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.light.primary,
    marginHorizontal: 10,
    height: 75,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    width: '125%',
    height: '100%',
    bottom: '-35%',
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: 0.075,
  },
  cardBadge: {
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
})

export default ProfileCards
