import { cloneElement, FC, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  UIManager,
  View,
} from 'react-native'

const renderIndicator = (
  count: any,
  currentIndex: any,
  indicatorStyle: any,
  indicatorActiveColor: any,
  indicatorInActiveColor: any,
  indicatorActiveWidth: any
) => {
  let indicators = []
  for (let i = 0; i < count; i++) {
    indicators.push(
      <View
        key={i}
        style={[
          styles.indicator,
          indicatorStyle,
          i === currentIndex
            ? indicatorActiveColor
              ? {
                  ...styles.active,
                  ...{
                    backgroundColor: indicatorActiveColor,
                    width: indicatorActiveWidth,
                  },
                }
              : styles.active
            : {
                ...styles.inactive,
                ...{ backgroundColor: indicatorInActiveColor },
              },
        ]}
      />
    )
  }
  return indicators
}

const Indicator: FC<any> = ({
  itemCount,
  currentIndex,
  indicatorStyle,
  indicatorContainerStyle,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth = 6,
}: any) => {
  return (
    <View style={[styles.indicatorContainer, indicatorContainerStyle]}>
      {renderIndicator(
        itemCount,
        currentIndex,
        indicatorStyle,
        indicatorActiveColor,
        indicatorInActiveColor,
        indicatorActiveWidth
      )}
    </View>
  )
}

const ChildItem: FC<any> = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
  itemStyle,
}) => {
  return (
    <Pressable onPress={() => onPress(index)}>
      <Image
        style={[styles.childImage, style, { height: height, resizeMode: 'cover', ...itemStyle }]}
        source={local ? item[imageKey] : { uri: item[imageKey] }}
      />
    </Pressable>
  )
}

export const FlatListSlider: FC<any> = ({
  datas = [],
  imageKey = 'image',
  local = false,
  width = Math.round(Dimensions.get('window').width),
  height = 200,
  separatorWidth = 0,
  loop = false,
  indicator = true,
  indicatorStyle = {},
  indicatorContainerStyle = {},
  indicatorActiveColor = '#3498db',
  indicatorInActiveColor = '#bdc3c7',
  indicatorActiveWidth = 6,
  animation = true,
  autoscroll = false,
  timer = 3000,
  onPress = () => '',
  currentIndexCallback = () => 0,
  contentContainerStyle = {},
  itemStyle = {},
  component = <ChildItem />,
}: any) => {
  const slider: any = useRef()
  const [index, setIndex] = useState<any>(0)
  const [data, setData] = useState<any>([])

  const itemWidth: any = width
  const totalItemWidth: any = itemWidth + separatorWidth
  let sliderTimer: any

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }, [])

  useEffect(() => {
    if (datas?.length) {
      setData(datas)
    }
  }, [datas])

  const changeSliderListIndex: any = () => {
    if (animation) {
      LayoutAnimation.configureNext(LayoutAnimation?.Presets?.easeInEaseOut)
    }
    setIndex((prev: any) => prev + 1)
    if (slider?.current) {
      slider?.current?.scrollToIndex({
        index: index,
        animated: true,
        // viewOffset: 0,
        // viewPosition: 0,
      })
    }
  }

  const startAutoPlay: any = () => {
    sliderTimer = setInterval(changeSliderListIndex, timer)
  }

  const stopAutoPlay: any = () => {
    if (sliderTimer) {
      clearInterval(sliderTimer)
      sliderTimer = null
    }
  }

  useEffect(() => {
    if (autoscroll) {
      startAutoPlay()
    }

    return () => {
      if (autoscroll) {
        stopAutoPlay()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoscroll, startAutoPlay])

  const onViewableItemsChanged: any = ({ viewableItems, changed }: any) => {
    if (viewableItems.length > 0) {
      let currentIndex = viewableItems?.[0]?.index
      if (currentIndex % data.length === data.length - 1 && loop) {
        setIndex(currentIndex)
        setData((prev: any) => [...prev, ...datas])
      } else {
        setIndex(currentIndex)
      }

      if (currentIndexCallback) {
        currentIndexCallback(currentIndex)
      }
    }
  }

  return (
    <View>
      <FlatList
        ref={slider}
        initialScrollIndex={0}
        horizontal
        pagingEnabled={true}
        snapToInterval={totalItemWidth}
        decelerationRate='fast'
        overScrollMode='never'
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={contentContainerStyle}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, idx }: any) =>
          cloneElement(component, {
            style: { width: width },
            item: item,
            imageKey: imageKey,
            onPress: onPress,
            index: index % data.length,
            active: idx === index,
            local: local,
            height: height,
            itemStyle: itemStyle,
          })
        }
        ItemSeparatorComponent={() => <View style={{ width: separatorWidth }} />}
        keyExtractor={(item, idx) => item.toString() + idx}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        getItemLayout={(_, idx) => ({
          length: totalItemWidth,
          offset: totalItemWidth * idx,
          index: idx,
        })}
        windowSize={1}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        removeClippedSubviews={true}
      />
      {indicator && (
        <Indicator
          itemCount={datas.length}
          currentIndex={index % datas.length}
          indicatorStyle={indicatorStyle}
          indicatorContainerStyle={[styles.indicatorContainerStyle, indicatorContainerStyle]}
          indicatorActiveColor={indicatorActiveColor}
          indicatorInActiveColor={indicatorInActiveColor}
          indicatorActiveWidth={indicatorActiveWidth}
          style={{ ...styles.indicator, ...indicatorStyle }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  active: {},
  inactive: {},
  childImage: {
    height: 230,
    resizeMode: 'stretch',
  },
  indicatorContainerStyle: {
    marginTop: 18,
  },
  // image: {
  //   height: 230,
  //   resizeMode: 'stretch',
  // },
  // shadow: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 3, height: 3 },
  //       shadowOpacity: 0.4,
  //       shadowRadius: 10,
  //     },
  //     android: {
  //       elevation: 5,
  //     },
  //   }),
  // },
})
