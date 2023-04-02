import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 2%;
  border-radius: 3px;
  background: #fff;
  margin: 5px auto;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 75px;
  height: 75px;
  border-radius: 3px;
`;

export const InfoArea = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3a4767;
  margin-bottom: 5px;
`;

export const InfoTextArea = styled.View`
  align-items: flex-start;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: #f7f07b;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  bottom: 10%;
  right: 2%;
  padding: 4px 7px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #3a4767;
`;

export const Icon = styled(Ionicons)`
  font-size: 16px;
  color: #3a4767;
  margin: 1px 0 0 2px;
`;
