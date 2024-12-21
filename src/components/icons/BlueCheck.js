import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgBlueCheck = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    className=""
    {...props}>
    <G
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}>
      <Path
        d="M45 6.18 57.06 0l7.35 11.38 13.53.68.68 13.53L90 32.94 83.82 45 90 57.06l-11.38 7.35-.68 13.53-13.53.68L57.06 90 45 83.82 32.94 90l-7.35-11.38-13.53-.68-.68-13.53L0 57.06 6.18 45 0 32.94l11.38-7.35.68-13.53 13.53-.68L32.94 0z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#0096f1',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.407 1.407)scale(2.81)"
      />
      <Path
        d="M40.16 58.47 26.24 45.08l3.46-3.6 10.45 10.04 21.07-20.44 3.48 3.59z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#fff',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.407 1.407)scale(2.81)"
      />
    </G>
  </Svg>
);
export default SvgBlueCheck;
