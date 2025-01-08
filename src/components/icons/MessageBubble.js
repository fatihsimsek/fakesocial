import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMessageBubble = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 28 28"
    className=""
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.03 3.926a8.104 8.104 0 0 0 0 16.208h5.94q.267 0 .53-.017c.315-.02.635.078.887.29l2.848 2.383a.2.2 0 0 0 .328-.154v-3.3c0-.389.18-.746.472-.98a8.104 8.104 0 0 0-5.065-14.43zM1 12.03C1 6.49 5.49 2 11.03 2h5.94C22.51 2 27 6.49 27 12.03a10.01 10.01 0 0 1-3.51 7.622v4.856c0 1.062-1.241 1.642-2.056.96l-4.081-3.416q-.19.008-.383.008h-5.94C5.49 22.06 1 17.569 1 12.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMessageBubble;
