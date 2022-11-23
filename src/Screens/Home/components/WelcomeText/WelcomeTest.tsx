import { View, Text, TextProps } from 'react-native'
import React from 'react'
import colors from '../../../../Assets/colors'

type Props = {
  name: string
} & TextProps

const WelcomeText = ({ name, ...rest }: Props) => {
  return (
    <Text
      style={{
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 20,
      }}
      {...rest}
    >
      Bienvenido! Busquemos el regalo para {name}
    </Text>
  )
}

export default WelcomeText
