import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../../../src/screens/Home";

describe('HomeScreen', () => {

  it('Rendered component successfully', () => {
    render(<Home />);
  });

  it('Rendered banner successfully', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('bannerHome')).toBeTruthy();
  });

  it('Rendered characters title successfully', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Characters/i)).toBeTruthy();
  });

});
