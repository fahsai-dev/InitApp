import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../helpers/colors';

const fontFamily = () => {
  return 'System';
};

const Text = styled.Text`
  fontFamily: ${fontFamily};
  color: ${(props: any) => props.fontColor || colors.black};
  fontSize: ${(props: any) => props.fontSize || '16'}px;
`;

export default Text;
