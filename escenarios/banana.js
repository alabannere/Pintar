import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 56.7" {...props}>
      <Path
        fill={props.fill}
        stroke="#273637"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M16.5 46.7c13 5.4 28-.8 33.4-13.8h0c1.3-3.2 1.9-6.5 1.9-9.8h0c0-2.4-1.6-4.4-3.9-5-.1-2.9-1.5-7.7-3.1-10l-1.5 1.8c1.3 3.2.3 8 .3 8s-1.9 6.2-4.1 10.7v0c-.7 1.8-1.8 3.4-3.1 4.7-1.3 1.3-2.9 2.4-4.7 3.1-1.7.7-3.6 1.1-5.5 1.1-5.1 0-10.3-1-15.3-3h0c-1.6-.7-3.5.1-4.2 1.7h0c-.2.5-.3 1-.3 1.6 0 .5.1 1.1.3 1.6.2.5.5.9.9 1.3l.5.5c2.4 2.2 5.2 4.2 8.4 5.5h0z"
      />
      <Path
        fill="none"
        stroke="#273637"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M14.8 42.5c13 5.4 28-.8 33.4-13.8-5.4 13-20.4 19.2-33.4 13.8z"
      />
      <Path
        fill="#273637"
        stroke="#273637"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M6.5 37.7c0-.5.1-1.1.3-1.6 0 0 0 0 0 0h0c.4-.9 1.2-1.6 2.1-1.8l-2-1.1L4.8 36l1.8 2.3c0-.2-.1-.4-.1-.6z"
      />
    </Svg>
  )
}

export default SvgComponent
