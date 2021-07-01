import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 513.01" {...props} fill="#000">
      <G data-name="Capa 2">
        <G data-name="Capa 1">
          <Path
            d="M322.7 347.51a157.67 157.67 0 01-77.42 135.65q-2.49 1.47-5 2.85A157.53 157.53 0 017.7 347.51a152.17 152.17 0 0149.43-112.39 160.67 160.67 0 0039.6-55.38A160.85 160.85 0 00108.28 138a56.23 56.23 0 0155.59-49h2.66a56.22 56.22 0 0155.59 49 160.85 160.85 0 0011.55 41.79 157.34 157.34 0 007.17 14.57q2.41 4.35 5 8.39a163.5 163.5 0 0027.41 32.42 152.17 152.17 0 0149.45 112.34z"
            fill={props.fill}
          />
          <Path
            d="M503.7 348a157.5 157.5 0 01-315 0 152.17 152.17 0 0149.43-112.39 159.64 159.64 0 0051.15-97.17c.16-1.17.35-2.32.58-3.46a56.19 56.19 0 0152.79-45.43H347.53a56.22 56.22 0 0155.59 48.94 159.64 159.64 0 0051.15 97.17A152.17 152.17 0 01503.7 348z"
            fill="#fff4ca"
          />
          <Path
            d="M359.94 127c-30.13 9.86-64.5 5.7-93.24-14.41a114.44 114.44 0 01-45.85-68.7q-1.2-5.24-1.9-10.55c3.07-1 6.19-1.87 9.34-2.57 27.74-6.28 58.09-1.08 83.9 17A114.91 114.91 0 01359.94 127z"
            fill="#37b678"
          />
          <Path
            d="M294.15 313.57c8-8 36.07-7.07 36.07-7.07s.93 28.05-7.07 36.06a20.5 20.5 0 01-29-29zm104.1 0c-8-8-36.07-7.07-36.07-7.07s-.93 28.05 7.07 36.06a20.5 20.5 0 0029-29z"
            fill="#58565d"
          />
          <Path d="M361.73 299a7.5 7.5 0 00-7.24 7.25c-.25 7.34-.3 32.05 9.26 41.62a28 28 0 0039.64-39.57c-9.6-9.6-34.31-9.53-41.66-9.3zm31 38.26a13 13 0 01-18.38 0c-2.74-2.74-4.48-13.06-4.86-23.24 10.18.38 20.51 2.12 23.24 4.85a13 13 0 01.01 18.39zm66.39-107.17a152.14 152.14 0 01-48.78-92.64 64.33 64.33 0 00-20.78-39.28 63.33 63.33 0 00-36.82-15.9 121 121 0 00-36.46-40.65c-28.74-20.11-63.67-26-96.4-16.46a53.14 53.14 0 00-51-1.44q-3.24-9.66-7.5-19.25a7.5 7.5 0 00-13.72 6.06A187.18 187.18 0 01163 66.32c.57 5.22.86 10.31.91 15.2h-.28c-31.64 0-58.74 23.83-63 55.42a153.69 153.69 0 01-11 39.85 153.18 153.18 0 01-37.77 52.8A159.69 159.69 0 000 347.52c0 91 74 165 165 165a164.06 164.06 0 0090.18-26.82A165 165 0 00511 348a160.05 160.05 0 00-51.87-117.93zM297 79.68L236.56 36.8c24.57-3.75 49.8 2.18 71.13 17.11a107.43 107.43 0 0143.59 67.76A96 96 0 01295 119h-.1l-.3-.1a102.25 102.25 0 01-23.77-12.39 107 107 0 01-40.56-55.75l58.07 41.21A7.5 7.5 0 00297 79.69zM195.94 33a38.26 38.26 0 0115.89 4.84 122.59 122.59 0 0050.37 80.92 117.87 117.87 0 0020.8 11.62 65.6 65.6 0 00-1.36 7.06 153.69 153.69 0 01-11 39.85 150.21 150.21 0 01-15 26.86 150.67 150.67 0 01-15.31-27.36 153.62 153.62 0 01-11-39.84A64.18 64.18 0 00179 82.82a168.51 168.51 0 00-1-18.11 190 190 0 00-4.77-26.26A39.46 39.46 0 01195.94 33zM165 497.52c-82.71 0-150-67.29-150-150a144.66 144.66 0 0147-106.86 168 168 0 0041.43-58A168.69 168.69 0 00115.51 139c3.26-24 23.71-42.19 47.67-42.43 0 .33-.07.67-.11 1a117.09 117.09 0 01-3.88 18 37.12 37.12 0 01-7.46-2 7.5 7.5 0 10-5.46 14A51.21 51.21 0 00165 131h1.78a51.21 51.21 0 0017-3.51 7.5 7.5 0 00-5.46-14c-1.08.42-2.17.78-3.27 1.1a131.61 131.61 0 002.93-15.13c.07-.49.12-1 .18-1.5a49.17 49.17 0 0136.38 41 168.69 168.69 0 0012.09 43.74 165.8 165.8 0 0019.51 33.77 161.76 161.76 0 01-13.22 13.61A159.69 159.69 0 00181 348a164.76 164.76 0 0061.17 128.12 149.16 149.16 0 01-77.17 21.4zm287.07-43.44A149.09 149.09 0 01346 498c-82.71 0-150-67.29-150-150a144.66 144.66 0 0147-106.86 167.16 167.16 0 0053.52-101.7c.18-1.34.44-2.67.73-4a110.55 110.55 0 0064.83-1.32 7.49 7.49 0 005.1-8.11 123.75 123.75 0 00-6.81-27.25 48.61 48.61 0 0135.13 40.69A167.1 167.1 0 00449 241.16 145 145 0 01496 348a149 149 0 01-43.93 106.08zM330.27 299c-7.35-.24-32.06-.3-41.62 9.27a28 28 0 0039.6 39.59c9.56-9.56 9.51-34.27 9.26-41.61a7.5 7.5 0 00-7.24-7.25zm-12.63 38.26a13 13 0 01-18.38-18.39c2.73-2.73 13.06-4.47 23.24-4.85-.38 10.18-2.12 20.5-4.86 23.24z" />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent