import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ededee;
  padding: 4%;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
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
