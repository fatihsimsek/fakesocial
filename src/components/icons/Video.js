import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const SvgVideo = props => (
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
    <Path d="m23 7-7 5 7 5z" />
    <Rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
  </Svg>
);
export default SvgVideo;
