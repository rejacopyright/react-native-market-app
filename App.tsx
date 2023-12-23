import colors from '@config/colors'
import { mapRecursive } from '@helpers/index'
import NavBar from '@pages/navBar'
import PublicRoutes from '@routes/public'
import { FC } from 'react'
import { configureFonts, MD3LightTheme, PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { NativeRouter, Route, Routes } from 'react-router-native'

const App: FC<any> = ({ navigation: _ }) => {
  const fontConfig = {
    fontFamily: 'Quicksand-500',
  }
  const paperTheme: any = {
    ...MD3LightTheme,
    colors: colors.light,
    fonts: configureFonts({ config: fontConfig }),
  }
  return (
    <>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <PaperProvider
        theme={paperTheme}
        settings={{
          icon: (props: any) => <Icon {...props} />,
        }}>
        <NativeRouter>
          <Routes>
            <Route path='/' Component={NavBar}>
              {mapRecursive(PublicRoutes, ({ name, path, component }: any, key: number) => {
                return <Route key={`${key}-${name}`} path={path} Component={component} />
              })}
            </Route>
          </Routes>
        </NativeRouter>
      </PaperProvider>
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })

export default App
