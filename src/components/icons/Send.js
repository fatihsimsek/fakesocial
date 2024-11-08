import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSend = props => (
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
    <Path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
  </Svg>
);
export default SvgSend;
