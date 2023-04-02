import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';

import {
  Banner,
  Container,
  Title,
  TitleArea,
  TitleLine,
} from './styles';

import { CharacterProps } from '../../components/CharacterCard';

import CharacterCard from '../../components/CharacterCard';
import api from '../../services/api';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState<CharacterProps[] | []>([]);

  const getAllCharacters = async () => {
    try {
      const charactersArr = [] as CharacterProps[];
      const result = await api.get('/character');
      const charactersDb = result.data.results;

      if (charactersDb.length >= 0) {

        charactersDb.forEach((item: CharacterProps) => {

          const newItem = {
            id: item.id,
            name: item.name,
            species: item.species,
            gender: item.gender,
            status: item.status,
            origin: item.origin.name,
            photo: item.image,
          };

          charactersArr.push(newItem);
        });

        setAllCharacters([...charactersArr]);
      }

    }
    catch (error) {
      // console.log('ERROR: ', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<CharacterProps>) => <CharacterCard {...item} />;

  return (
    <>
      <Banner testID='bannerHome' source={{ uri: 'https://images3.alphacoders.com/812/812062.png' }} />
      <Container>
        <TitleArea>
          <Title>Characters</Title>
          <TitleLine />
        </TitleArea>
        {
          loading ?
            <ActivityIndicator color="#3a4767" size="large" />
            :
            <FlatList
              keyExtractor={item => item.id}
              data={allCharacters}
              renderItem={renderItem}
            />
        }
      </Container>
    </>
  );
}
