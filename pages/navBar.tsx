import { PageLoaderCircle } from '@components/loader'
import colors from '@config/colors'
import { FC, Suspense, useEffect } from 'react'
import { Alert, BackHandler, StyleSheet, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text, TouchableRipple } from 'react-native-paper'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Outlet, useLocation, useNavigate } from 'react-router-native'

const menu: any = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Chat', path: '/chat', icon: 'message1' },
  { name: 'Likes', path: '/likes', icon: 'hearto' },
  { name: 'Cart', path: '/cart', icon: 'shoppingcart' },
  { name: 'Profile', path: '/profile', icon: 'user' },
]

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
      <Suspense fallback={<PageLoaderCircle />}>
        <View style={styles.container}>
          <Outlet />
        </View>
      </Suspense>
      <View />
      <Row
        style={{
          flexWrap: 'nowrap',
          height: 'auto',
          backgroundColor: '#fff',
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
          // borderTopWidth: 1,
          // borderTopColor: '#eee',
          elevation: 10,
        }}>
        {menu?.map(({ name, path, icon }: any, idx: number) => {
          const activePath: any = path !== '/' ? pathname?.startsWith(path) : pathname === '/'
          return (
            <Col key={idx}>
              <TouchableRipple
                rippleColor='rgba(0, 0, 0, .05)'
                style={{
                  width: '100%',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  paddingVertical: 10,
                }}
                onPress={() => {
                  navigate(path)
                }}>
                <>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: activePath ? colors.light.primary : 'transparent',
                      paddingBottom: activePath ? 2.5 : 0,
                    }}>
                    <AntIcon
                      name={icon}
                      size={activePath ? 20 : 25}
                      color={activePath ? 'white' : colors.light.primary}
                    />
                  </View>
                  <Text numberOfLines={1} style={{ fontSize: 11 }}>
                    {name}
                  </Text>
                </>
              </TouchableRipple>
            </Col>
          )
        })}
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
})

export default Index
