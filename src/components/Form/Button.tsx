import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  /**
   * Label of button
   * */
  text: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Style for the container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
};

const Button: React.FunctionComponent<Props> = ({
  style,
  textStyle,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.root, style]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors['200'],
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  text: {
    color: colors.A100,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
