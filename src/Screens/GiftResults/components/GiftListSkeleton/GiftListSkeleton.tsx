import React from 'react'
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native'

const GiftListSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 640 840"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="180" y="4" rx="8" ry="8" width="240" height="240" />
    <Rect x="64" y="280" rx="8" ry="8" width="400" height="200" />

    <Rect x="64" y="500" rx="8" ry="8" width="400" height="200" />

    <Rect x="64" y="720" rx="8" ry="8" width="400" height="200" />
  </ContentLoader>
)

export default GiftListSkeleton
