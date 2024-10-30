import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFavourite = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 32 32"
    className=""
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.333 5.333A1.333 1.333 0 0 0 8 6.667v18.742l7.225-5.16a1.33 1.33 0 0 1 1.55 0L24 25.408V6.667a1.334 1.334 0 0 0-1.333-1.334zM6.505 3.838a4 4 0 0 1 2.828-1.171h13.334a4 4 0 0 1 4 4V28a1.333 1.333 0 0 1-2.109 1.085L16 22.972l-8.558 6.113A1.333 1.333 0 0 1 5.333 28V6.667a4 4 0 0 1 1.172-2.829"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFavourite;
