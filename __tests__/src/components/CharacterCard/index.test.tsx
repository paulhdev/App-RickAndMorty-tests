import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import CharacterCard from '../../../../src/components/CharacterCard';
import { CharacterProps } from '../../../../src/components/CharacterCard';

const mockCharacter: CharacterProps = {
  id: '2',
  name: 'Morty Smith',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: 'Earth',
  photo: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

describe('CharacterCard', () => {

  it('Rendered card successfully', () => {
    render(<CharacterCard {...mockCharacter} />)
  });

  it('Rendered view more button successfully', () => {
    const { getByText } = render(<CharacterCard {...mockCharacter} />)

    expect(getByText(/View more/i)).toBeTruthy();
  });

  it('Rendered view more button icon successfully', () => {
    const { getByTestId } = render(<CharacterCard {...mockCharacter} />);

    expect(getByTestId('viewMoreBtnIcon')).toBeTruthy();
  });

});
