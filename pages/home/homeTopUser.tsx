import { topUserList } from '@helpers/datas'
import React, { FC } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Text } from 'react-native-paper'
import { AirbnbRating as RatingAirbnb, TapRatingProps } from 'react-native-ratings'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigate } from 'react-router-native'

interface RatingProps extends TapRatingProps {
  unSelectedColor?: string
}
const AirbnbRating: FC<RatingProps> = (props) => RatingAirbnb(props)

const HomeTopUser: FC<any> = () => {
  const navigate: any = useNavigate()
  const deviceWidth: any = Math.floor(Dimensions.get('window').width)
  const gridX: any = deviceWidth / 3
  return (
    <View>
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
          marginTop: 25,
          paddingHorizontal: 20,
        }}>
        <Text style={{ fontFamily: 'Quicksand-700', flex: 1 }}>Top Users</Text>
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
      <Grid style={{ flexWrap: 'wrap' }}>
        <FlatList
          overScrollMode='never'
          style={{ paddingLeft: 0 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={topUserList}
          renderItem={({ item, index }: any) => (
            <Col
              key={index}
              style={{
                flexWrap: 'wrap',
                width: gridX - 20,
                height: gridX + 35,
                marginLeft: index === 0 ? 15 : 0,
                marginRight: index === topUserList?.length - 1 ? 15 : 0,
              }}>
              <View style={styles.card}>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => navigate('/profile')}
                  style={[styles.cardContent, styles.shadow]}>
                  <Image
                    style={[
                      {
                        height: 65,
                        width: 65,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                        marginTop: 15,
                        marginBottom: 5,
                        borderRadius: 100,
                      },
                    ]}
                    source={item?.avatar}
                  />
                  <View style={{ paddingHorizontal: 15 }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#000',
                        fontSize: 12,
                        flexWrap: 'nowrap',
                        textAlign: 'center',
                        fontFamily: 'Quicksand-600',
                      }}>
                      {item?.name}
                    </Text>
                    <Text
                      style={{
                        color: '#555',
                        fontSize: 10,
                        textAlign: 'center',
                        lineHeight: 13,
                      }}>
                      {item?.level}
                    </Text>
                    <AirbnbRating
                      isDisabled
                      showRating={false}
                      count={5}
                      defaultRating={item?.rating}
                      size={20}
                      unSelectedColor={'#ddd'}
                      ratingContainerStyle={{
                        alignSelf: 'center',
                        marginVertical: -5,
                        transform: [{ scale: 0.5 }],
                      }}
                    />
                    <Row
                      style={{
                        height: 'auto',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Icon name='check-circle' size={10} color='limegreen' />
                      <Text
                        style={{
                          fontSize: 10,
                          lineHeight: 13,
                          marginLeft: 2.5,
                          fontFamily: 'Quicksand-700',
                        }}>
                        {item?.sold}
                      </Text>
                    </Row>
                  </View>
                </TouchableOpacity>
              </View>
            </Col>
          )}
        />
      </Grid>
    </View>
  )
}

export default HomeTopUser

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    paddingHorizontal: 2.5,
    paddingVertical: 5,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 7.5,
  },
})
