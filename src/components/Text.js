import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../helpers/colors';

const fontFamily = (props) => {
  return 'System';
};

const Text = styled.Text`
  fontFamily: ${fontFamily};
  color: ${(props) => props.fontColor || colors.black};
  fontSize: ${(props) => props.fontSize || '16'}px;
  textTransform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`;

export default Text;
