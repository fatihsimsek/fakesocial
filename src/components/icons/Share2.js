import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgShare2 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={18} cy={5} r={3} />
    <Circle cx={6} cy={12} r={3} />
    <Circle cx={18} cy={19} r={3} />
    <Path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Svg>
);
export default SvgShare2;
