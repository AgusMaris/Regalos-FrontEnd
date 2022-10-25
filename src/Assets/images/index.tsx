import { SvgProps } from 'react-native-svg'
import Gift from './Gift'

export const customImages = {
  gift: (props: SvgProps) => <Gift {...props} />,
}

type CustomImageProps = {
  name: keyof typeof customImages
  props?: SvgProps
}

export default function CustomImage({ name, props }: CustomImageProps) {
  const Image = customImages[name]
  return <Image {...props} />
}
