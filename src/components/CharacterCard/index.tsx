import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../../routes';

import {
  Container,
  InfoArea,
  InfoText,
  InfoTextArea,
  Name,
  Photo,
  Icon,
  Button,
  ButtonText,
} from './styles';

export type CharacterProps = {
  id: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: string;
  photo: string;
};

export default function CharacterCard({
  id,
  name,
  species,
  gender,
  status,
  origin,
  photo,
}: CharacterProps) {

  const navigation = useNavigation();

  const handleNavigationCharacterInfo = () => {
    const data = {
      id,
      name,
      species,
      gender,
      status,
      origin,
      photo,
    };

    navigation.navigate('CharacterInfo', { ...data });
  };

  return (
    <Container>
      <Photo source={{ uri: photo }} />
      <InfoArea>
        <Name>{name}</Name>
        <InfoTextArea>
          <InfoText>Species: {species}</InfoText>
          <InfoText>Gender: {gender}</InfoText>
        </InfoTextArea>
      </InfoArea>
      <Button
        onPress={handleNavigationCharacterInfo}
      >
        <ButtonText>View more</ButtonText>
        <Icon testID='viewMoreBtnIcon' name="chevron-forward-circle-outline" />
      </Button>
    </Container>
  );
}
