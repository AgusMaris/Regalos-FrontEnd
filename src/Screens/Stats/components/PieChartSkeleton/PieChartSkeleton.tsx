import React from 'react'
import ContentLoader, { Rect, Circle, Path, IContentLoaderProps } from 'react-content-loader/native'
import { Dimensions } from 'react-native'

const LABEL_HEIGHT = 20
const LABEL_WIDTH = 200
const LABEL_GAP = 20
const CIRCLE_RADIUS = 200
const LABEL_INITIAL_Y = CIRCLE_RADIUS * 2 + 75

const PieChartSkeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    height={600}
    viewBox="0 0 500 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Circle cx="250" cy="240" r={CIRCLE_RADIUS} />
    {new Array(7).fill(0).map((_, index) => (
      <>
        <Circle
          cx={LABEL_HEIGHT / 2}
          cy={LABEL_INITIAL_Y + LABEL_HEIGHT / 2 + index * (LABEL_HEIGHT + LABEL_GAP)}
          r={LABEL_HEIGHT / 2}
        />
        <Rect
          key={index}
          x={LABEL_HEIGHT + 10}
          y={LABEL_INITIAL_Y + (LABEL_HEIGHT + LABEL_GAP) * index}
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
