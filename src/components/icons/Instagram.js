import * as React from 'react';
import Svg, {Path, RadialGradient, Stop} from 'react-native-svg';
const SvgInstagram = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 128 128"
    width="24"
    height="24"
    className=""
    {...props}>
    <Path fill="none" d="M0 0h128v128H0z" clipRule="evenodd" />
    <RadialGradient
      id="instagram_svg__a"
      cx={19.111}
      cy={128.444}
      r={163.552}
      gradientUnits="userSpaceOnUse">
      <Stop
        offset={0}
        style={{
          stopColor: '#ffb140',
        }}
      />
      <Stop
        offset={0.256}
        style={{
          stopColor: '#ff5445',
        }}
      />
      <Stop
        offset={0.599}
        style={{
          stopColor: '#fc2b82',
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#8e40b7',
        }}
      />
    </RadialGradient>
    <Path
      fill="url(#instagram_svg__a)"
      fillRule="evenodd"
      d="M105.843 29.837a7.68 7.68 0 1 1-15.36 0 7.68 7.68 0 0 1 15.36 0M64 85.333c-11.782 0-21.333-9.551-21.333-21.333S52.218 42.667 64 42.667 85.333 52.218 85.333 64 75.782 85.333 64 85.333m0-54.198c-18.151 0-32.865 14.714-32.865 32.865S45.849 96.865 64 96.865 96.865 82.151 96.865 64 82.151 31.135 64 31.135m0-19.603c17.089 0 19.113.065 25.861.373 6.24.285 9.629 1.327 11.884 2.204 2.987 1.161 5.119 2.548 7.359 4.788 2.24 2.239 3.627 4.371 4.788 7.359.876 2.255 1.919 5.644 2.204 11.884.308 6.749.373 8.773.373 25.862s-.065 19.113-.373 25.861c-.285 6.24-1.327 9.629-2.204 11.884-1.161 2.987-2.548 5.119-4.788 7.359-2.239 2.24-4.371 3.627-7.359 4.788-2.255.876-5.644 1.919-11.884 2.204-6.748.308-8.772.373-25.861.373-17.09 0-19.114-.065-25.862-.373-6.24-.285-9.629-1.327-11.884-2.204-2.987-1.161-5.119-2.548-7.359-4.788-2.239-2.239-3.627-4.371-4.788-7.359-.876-2.255-1.919-5.644-2.204-11.884-.308-6.749-.373-8.773-.373-25.861s.065-19.113.373-25.862c.285-6.24 1.327-9.629 2.204-11.884 1.161-2.987 2.548-5.119 4.788-7.359 2.239-2.24 4.371-3.627 7.359-4.788 2.255-.876 5.644-1.919 11.884-2.204 6.749-.308 8.773-.373 25.862-.373M64 0C46.619 0 44.439.074 37.613.385 30.801.696 26.148 1.778 22.078 3.36c-4.209 1.635-7.778 3.824-11.336 7.382S4.995 17.869 3.36 22.078C1.778 26.149.696 30.801.385 37.613.074 44.439 0 46.619 0 64s.074 19.561.385 26.387c.311 6.812 1.393 11.464 2.975 15.535 1.635 4.209 3.824 7.778 7.382 11.336s7.127 5.746 11.336 7.382c4.071 1.582 8.723 2.664 15.535 2.975 6.826.311 9.006.385 26.387.385s19.561-.074 26.387-.385c6.812-.311 11.464-1.393 15.535-2.975 4.209-1.636 7.778-3.824 11.336-7.382s5.746-7.127 7.382-11.336c1.582-4.071 2.664-8.723 2.975-15.535.311-6.826.385-9.006.385-26.387s-.074-19.561-.385-26.387c-.311-6.812-1.393-11.464-2.975-15.535-1.636-4.209-3.824-7.778-7.382-11.336s-7.127-5.746-11.336-7.382C101.851 1.778 97.199.696 90.387.385 83.561.074 81.381 0 64 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInstagram;