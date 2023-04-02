import { ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Button,
  Container,
  Icon,
  ImageBanner,
  InfoArea,
  InfoRow,
  InfoText,
  Title,
  TitleArea,
  TitleLine,
} from './styles';

import { StackNavigationProps } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type ScreenProps = NativeStackScreenProps<StackNavigationProps, 'CharacterInfo'>;

export default function CharacterInfo({ route }: ScreenProps) {

  const params = route.params;

  const navigation = useNavigation();

  return (
    <Container>
      <ImageBanner source={{ uri: params.photo }} />

      <Button
        onPress={() => navigation.goBack()}
      >
        <Icon name="close-outline" />
      </Button>

      <InfoArea>
        <ScrollView>

          <TitleArea>
            <Title>{params.name}</Title>
            <TitleLine />
          </TitleArea>

          <InfoRow>
            <InfoText>Status: {params.status}</InfoText>
            <InfoText>Origin: {params.origin}</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoText>Species: {params.species}</InfoText>
            <InfoText>Gender: {params.gender}</InfoText>
          </InfoRow>

        </ScrollView>
      </InfoArea>
    </Container>
  );
}
