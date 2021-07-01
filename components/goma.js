import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 155" {...props}>
      <G data-name="Capa 2">
        <Rect
          y={13}
          width={370}
          height={142}
          rx={59.61}
          opacity={0.17}
          fill="#090000"
        />
        <Rect width={370} height={142} rx={59.61} fill="#ffece8" />
        <Path
          d="M313.31.07v141.86A59.61 59.61 0 00370 82.39V59.61A59.61 59.61 0 00313.31.07z"
          opacity={0.05}
          fill="#090000"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent