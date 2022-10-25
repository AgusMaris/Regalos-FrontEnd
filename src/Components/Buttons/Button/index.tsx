import { View, Text, TouchableOpacity, TouchableOpacityProps, TextProps } from 'react-native'
import React from 'react'
import colors from '../../../Assets/colors'

type Props = {
  text: string
  textStyle?: TextProps['style']
} & TouchableOpacityProps

const Button = ({ style, text, textStyle, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: colors.primary, width: '100%', borderRadius: 20, ...style }}
      {...rest}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: 18,
          fontWeight: '700',
          padding: 10,
          textAlign: 'center',
          ...textStyle,
        }}
      >
        {' '}
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
