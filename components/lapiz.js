import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.86 75" {...props}>
      <Defs></Defs>
      <G id="prefix__Capa_2" data-name="Capa 2">
        <G id="prefix__Titulo">
          <G opacity={0.1}>
            <Path
              className="prefix__cls-2"
              fill="#000"
              d="M427.86 9H40.33C18.05 9 0 23.77 0 42s18.05 33 40.33 33h387.38l.15-.15zM525.86 39.73l-98-30.63v65.8l98-30.63v-4.54z"
            />
            <Path
              className="prefix__cls-2"
              d="M475.86 24.09v35.82l50-15.63v-4.56l-50-15.63z"
            />
          </G>
          <Path
            className="prefix__cls-3"
            fill={props.fill}
            d="M427.86 0H40.33C18.05 0 0 14.77 0 33s18.05 33 40.33 33h387.38l.15-.15z"
          />
          <Path
            fill="#fbcda9"
            d="M525.86 30.73L427.86.1v65.8l98-30.63v-4.54z"
          />
          <Path
            className="prefix__cls-3"
            fill={props.fill}
            d="M475.86 15.09v35.82l50-15.63v-4.57l-50-15.62z"
          />
          <Path
            d="M426.61 0H36.86C24.36 1 7.21 8.36 1.52 23h424.8c1.51.36 1.75-1 1.54-13-.61-6.68 1.44-8.33-1.25-10z"
            fill={props.fill}
            opacity={0.1}
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
