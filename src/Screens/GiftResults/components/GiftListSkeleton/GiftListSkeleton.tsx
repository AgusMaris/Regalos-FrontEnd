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
    <Rect x="64" y="4" rx="8" ry="8" width="200" height="200" />
    <Rect x="64" y="224" rx="12" ry="12" width="200" height="24" />
    <Rect x="326" y="4" rx="8" ry="8" width="200" height="200" />
    <Rect x="326" y="224" rx="12" ry="12" width="200" height="24" />
    <Rect x="64" y="310" rx="8" ry="8" width="200" height="200" />
    <Rect x="64" y="530" rx="12" ry="12" width="200" height="24" />
    <Rect x="326" y="310" rx="8" ry="8" width="200" height="200" />
    <Rect x="326" y="530" rx="12" ry="12" width="200" height="24" />
    <Rect x="64" y="591" rx="8" ry="8" width="200" height="200" />
    <Rect x="64" y="811" rx="12" ry="12" width="200" height="24" />
    <Rect x="326" y="591" rx="8" ry="8" width="200" height="200" />
    <Rect x="326" y="811" rx="12" ry="12" width="200" height="24" />
  </ContentLoader>
)

export default GiftListSkeleton
