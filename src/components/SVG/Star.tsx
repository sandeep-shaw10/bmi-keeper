import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Star({ props, color = '#ffd401', size=200, degree=0 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 122.88 117.1"
      {...props}
    >
      <Path
        d="M64.42 2l15.71 36.7L120 42.26a3.2 3.2 0 011.82 5.62l-30.18 26.3 8.9 39a3.19 3.19 0 01-2.42 3.82 3.27 3.27 0 01-2.46-.46L61.41 96.1l-34.34 20.54a3.18 3.18 0 01-4.38-1.09 3.14 3.14 0 01-.37-2.38l8.91-39L1.09 47.88a3.24 3.24 0 01-.32-4.52 3.32 3.32 0 012.29-1l39.72-3.56L58.49 2a3.24 3.24 0 015.93 0z"
        fill={color}
      />
    </Svg>
  )
}

export default Star