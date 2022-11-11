import React from 'react'
import ContentLoader, { Rect, Circle, Path, IContentLoaderProps } from 'react-content-loader/native'
import { Dimensions } from 'react-native'

const LABEL_HEIGHT = 20
const LABEL_WIDTH = 125
const LABEL_GAP = 20

const PieChartSkeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    height={300}
    viewBox="0 0 500 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Circle cx="125" cy="125" r="125" />
    {new Array(5).fill(0).map((_, index) => (
      <>
        <Circle cx={325} cy={LABEL_HEIGHT / 2 + index * (LABEL_HEIGHT + LABEL_GAP)} r={LABEL_HEIGHT / 2} />
        <Rect
          key={index}
          x="350"
          y={(LABEL_HEIGHT + LABEL_GAP) * index}
          rx="8"
          ry="8"
          width={LABEL_WIDTH}
          height={LABEL_HEIGHT}
        />
      </>
    ))}
  </ContentLoader>
)

export default PieChartSkeleton
