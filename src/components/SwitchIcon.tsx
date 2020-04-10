import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  isHorizontal?: boolean;
};

const SwitchIcon: React.FunctionComponent<Props> = ({ isHorizontal }) => {
  return (
    <Svg
      height="40"
      width="40"
      x="0"
      y="0"
      viewBox="0 0 459 459"
      style={isHorizontal && styles.horizontal}
    >
      <Path
        fill="white"
        d="M331.5,357V178.5h-51V357H204l102,102l102-102H331.5z M153,0L51,102h76.5v178.5h51V102H255L153,0z"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  horizontal: { transform: [{ rotate: '90deg' }] },
});

export default SwitchIcon;
