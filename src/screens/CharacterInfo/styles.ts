import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  background: #ededee;
`;

export const ImageBanner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 50%;
  background: #ededee;
  opacity: 0.7;
`;

export const InfoArea = styled.View`
  padding: 4%;
  background: #ededee;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: -5%;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3a4767;
`;

export const TitleLine = styled.View`
  height: 2px;
  width: 15%;
  border-radius: 2px;
  background: #3a4767;
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 5%;
  right: 3%;
`;

export const Icon = styled(Ionicons)`
  font-size: 42px;
  color: #3a4767;
  margin: 1px 0 0 2px;
`;

export const InfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f7f07b;
  padding: 4%;
  border-radius: 5px;
  margin: 5px 0;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #666;
`;
