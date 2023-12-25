import colors from '@config/colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigate } from 'react-router-native'

export const PageNotFound = () => {
  const navigate: any = useNavigate()
  return (
    <View style={styles.pageLoader}>
      <Text style={{ fontSize: 50, color: colors.light.primary }}>404</Text>
      <Text>Page Not Found</Text>
      <Button
        style={{ marginTop: 20 }}
        icon={() => <Icon name='arrowleft' size={15} color='#fff' />}
        mode='contained'
        onPress={() => navigate(-1)}
        labelStyle={{ fontFamily: 'Quicksand-700' }}>
        Back
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  pageLoader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})
