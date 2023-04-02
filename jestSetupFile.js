jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});
