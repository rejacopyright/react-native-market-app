import { PageLoaderCircle } from '@components/loader'
import { FC, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import AddToCart from './addToCart'
import ProductDescription from './productDescription'
import ProductDetailAppBar from './productDetailAppBar'
import ProductDetailPrice from './productDetailPrice'
import ProductReviews from './productReviews'
import ProductSlider from './productSlider'

const Index: FC<any> = ({ navigation: _ }) => {
  const [loading, setLoading] = useState<any>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) {
    return <PageLoaderCircle />
  }
  return (
    <>
      <ProductDetailAppBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode='never'
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <View>
          <ProductSlider />
          <ProductDetailPrice />
          <ProductDescription />
          <ProductReviews />
        </View>
      </ScrollView>
      <AddToCart />
    </>
  )
}

export default Index
