import React from 'react';
import CardsContainer from './CardsContainer';
import { render, screen } from '@testing-library/react';

test('CardsContainer_GivenNothing_ShouldRender', async () => {
    render (
        <CardsContainer/>
    );

    expect(screen.getByTestId('cardsContainer')).toBeInTheDocument();
})