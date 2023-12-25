import { Image, View } from 'react-native'
import { Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigate } from 'react-router-native'

const ProfileHeader = () => {
  const navigate: any = useNavigate()
  return (
    <View style={{ paddingTop: 50 }}>
      <Row style={{ justifyContent: 'center' }}>
        <Image
          source={require('@assets/icons/user_6.png')}
          style={{ width: 100, height: 100, marginRight: 10, borderRadius: 100 }}
        />
        <View>
          <Text style={{ fontFamily: 'Quicksand-700', fontSize: 18 }}>Reja Jamil</Text>
          <Row style={{ alignItems: 'center', height: 'auto' }}>
            <Icon name='mail' />
            <Text
              style={{
                fontSize: 12,
                lineHeight: 14,
                marginLeft: 2.5,
              }}>
              reja@copyright@gmail.com
            </Text>
          </Row>
          <View style={{ paddingBottom: 15 }} />
          <Row style={{ alignItems: 'center' }}>
            <View>
              <Text style={{ fontFamily: 'Quicksand-700', fontSize: 18 }}>192</Text>
              <Text style={{ fontSize: 12 }}>Followers</Text>
            </View>
            <View
              style={{
                width: 2.5,
                height: 25,
                backgroundColor: '#eee',
                marginHorizontal: 15,
                marginTop: 10,
                borderRadius: 10,
              }}
            />
            <View>
              <Text style={{ fontFamily: 'Quicksand-700', fontSize: 18 }}>18</Text>
              <Text style={{ fontSize: 12 }}>Following</Text>
            </View>
          </Row>
          <View style={{ width: 125, height: 40, marginTop: 15 }}>
            <Button
              icon='setting'
              mode='elevated'
              onPress={() => navigate('/profile/edit')}
              labelStyle={{ fontSize: 12, lineHeight: 13, fontFamily: 'Quicksand-700' }}
              style={{ marginBottom: 5 }}>
              Edit Profile
            </Button>
          </View>
        </View>
      </Row>
    </View>
  )
}

export default ProfileHeader
