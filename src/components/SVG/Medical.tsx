import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Medical({ props, color = 'red', size=100, degree=0 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      transform={`rotate(${degree % 360}, 12 , 12)`}
      {...props}
    >
      <Path d="M11 2a2 2 0 00-2 2v5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 002-2v-5h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5V4a2 2 0 00-2-2h-2z" />
    </Svg>
  )
}

export default Medical
