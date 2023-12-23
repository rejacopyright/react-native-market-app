import { FC, Suspense, useEffect } from 'react'
import { Alert, BackHandler, StyleSheet, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { ActivityIndicator, Text, TouchableRipple } from 'react-native-paper'
import { Outlet, useLocation, useNavigate } from 'react-router-native'

const PageLoader: FC<any> = () => {
  return (
    <View style={styles.pageLoader}>
      <ActivityIndicator animating={true} hidesWhenStopped={false} />
    </View>
  )
}

const Index: FC<any> = () => {
  const navigate: any = useNavigate()
  const { pathname }: any = useLocation()
  useEffect(() => {
    const backAction = () => {
      if (pathname !== '/') {
        navigate(-1)
      } else {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ])
      }
      return true
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => backHandler.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <View style={styles.container}>
      <Suspense fallback={<PageLoader />}>
        <View style={styles.container}>
          <Outlet />
        </View>
      </Suspense>
      <View />
      <Row
        style={{
          flexWrap: 'nowrap',
          height: 'auto',
          backgroundColor: '#eee',
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
        }}>
        <Col>
          <TouchableRipple
            rippleColor='rgba(0, 0, 0, .05)'
            style={{
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
            onPress={() => {
              navigate('/')
            }}>
            <Text>NAV</Text>
          </TouchableRipple>
        </Col>
        <Col>
          <TouchableRipple
            rippleColor='rgba(0, 0, 0, .05)'
            style={{
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
            onPress={() => navigate('/profile')}>
            <Text>NAV</Text>
          </TouchableRipple>
        </Col>
        <Col>
          <TouchableRipple
            rippleColor='rgba(0, 0, 0, .05)'
            style={{
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
            onPress={() => navigate('/profile')}>
            <Text>NAV</Text>
          </TouchableRipple>
        </Col>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  pageLoader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export default Index
