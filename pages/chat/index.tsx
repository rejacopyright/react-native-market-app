import { PageLoaderCircle } from '@components/loader'
import { randomInt } from '@helpers'
import { userList } from '@helpers/datas'
import { FC, useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, TextInput, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'
import { Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigate } from 'react-router-native'

const Index: FC<any> = ({ navigation: _ }) => {
  const navigate: any = useNavigate()
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<any>(true)

  useEffect(() => {
    setData(userList)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) {
    return <PageLoaderCircle />
  }

  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: '#fff',
          zIndex: 1,
        }}>
        <View
          style={{
            margin: 15,
            paddingHorizontal: 15,
            backgroundColor: '#f5f5f5',
            borderRadius: 50,
          }}>
          <Row style={{ alignItems: 'center' }}>
            <Icon name='search1' color='#000' size={15} style={{ marginRight: 5 }} />
            <Col>
              <TextInput placeholder='Type User...' />
            </Col>
          </Row>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 75 }} />
        {data?.map(({ name, avatar }: any, idx: number) => {
          return (
            <TouchableRipple
              key={idx}
              rippleColor='rgba(0, 0, 0, .05)'
              onPress={() => navigate('/chat/detail')}
              style={{ padding: 15 }}>
              <Row style={{ alignItems: 'center' }}>
                <Row>
                  <Image
                    source={avatar}
                    style={{ width: 50, height: 50, marginRight: 10, borderRadius: 50 }}
                  />
                  <Col>
                    <Text style={{ fontFamily: 'Quicksand-700', fontSize: 16, lineHeight: 18 }}>
                      {name}
                    </Text>
                    <Text numberOfLines={2} style={{ fontSize: 13, color: '#aaa' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Col>
                </Row>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Quicksand-700', fontSize: 12 }}>11:30</Text>
                  {randomInt(1, 2) === 1 && (
                    <Text
                      style={{
                        fontFamily: 'Quicksand-700',
                        fontSize: 12,
                        lineHeight: 16,
                        color: '#fff',
                        paddingHorizontal: 5,
                        paddingVertical: 1,
                        borderRadius: 5,
                        backgroundColor: 'mediumvioletred',
                      }}>
                      {randomInt(1, 99)}
                    </Text>
                  )}
                </View>
              </Row>
            </TouchableRipple>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
