import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const AddFeeds = props => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7499 8.32715C12.7499 7.91293 12.4141 7.57715 11.9999 7.57715C11.5857 7.57715 11.2499 7.91293 11.2499 8.32715V11.2404H8.33325C7.91904 11.2404 7.58325 11.5762 7.58325 11.9904C7.58325 12.4046 7.91904 12.7404 8.33325 12.7404H11.2499V15.6535C11.2499 16.0677 11.5857 16.4035 11.9999 16.4035C12.4141 16.4035 12.7499 16.0677 12.7499 15.6535V12.7404H15.6666C16.0808 12.7404 16.4166 12.4046 16.4166 11.9904C16.4166 11.5762 16.0808 11.2404 15.6666 11.2404H12.7499V8.32715Z"
      fill="#130F26"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
