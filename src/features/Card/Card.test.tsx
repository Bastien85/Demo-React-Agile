import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import User from '../../models/User.model';

test('Card_GivenDatas_ShouldRender', async () => {
    const user = {name: "Test"} as User;
    render (
        <Card user={user}/>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
})