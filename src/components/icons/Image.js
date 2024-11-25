import * as React from 'react';
import Svg, {Rect, Circle, Path} from 'react-native-svg';
const SvgImage = props => (
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
    <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <Circle cx={8.5} cy={8.5} r={1.5} />
    <Path d="m21 15-5-5L5 21" />
  </Svg>
);
export default SvgImage;
