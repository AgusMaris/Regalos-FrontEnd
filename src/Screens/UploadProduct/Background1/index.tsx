import * as React from 'react'
import { View } from 'react-native'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import colors from '../../../Assets/colors'

const Background1 = (props) => (
  <View
    style={{
      position: 'absolute',
    }}
  >
    <Svg
      width={400}
      height={844}
      viewBox="0 0 390 844"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_2)">
        <Path fill="#fff" d="M0 0H390V844H0z" />
        <Path
          d="M166 107C104.4 68.6 29 91-1 107L-40-11h524l73 49c-62.667 42-184.4 116.8-170 80 14.4-36.8-34-22.667-60-11-24 19-89.8 45.6-161 0z"
          fill={colors.primary}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0H390V844H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
)

export default Background1
