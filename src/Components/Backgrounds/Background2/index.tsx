import * as React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'

const WIDTH = Dimensions.get('screen').width + 10
const HEIGHT = Dimensions.get('screen').height + 10

const SvgComponent = (props: SvgProps) => (
  <View style={{ position: 'absolute' }}>
    <Svg
      width={WIDTH}
      height={HEIGHT}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 395 844"
    >
      <G clipPath="url(#a)">
        <Path fill="#fff" d="M0 0h390v844H0z" />
        <Path
          d="M131 735.5c-12.5-39.5-32.7-63.4-131.5-65h-23l14 193 321-18c-3.5-7-26.1-23.5-88.5-33.5s-77.5-51-92-76.5ZM166.992 79.2c60.358 34.049 147.508-19.2 189.785 0 42.276 19.199 34.223 0 34.223 0V-49.988L95.435-58C73.397-44.48 16.41-9.83-35.237 20.614c-51.646 30.445 21.52 31.713 64.558 28.542 20.742-4.173 77.314-4.006 137.671 30.044Z"
          fill="#DB2955"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h390v844H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
)

export default SvgComponent
