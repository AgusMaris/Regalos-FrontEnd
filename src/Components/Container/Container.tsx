import { View } from 'react-native'
export interface ContainerInterface {
  children: React.ReactNode
}

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      {children}
    </View>
  )
}

export default Container
