import React, { useState, useEffect } from 'react';
import './CardsContainer.css'
import User from '../../models/User.model';
import Card from '../Card/Card';
import { getMethod } from '../ApiFunctions';

function CardsContainer() {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        getMethod('https://swapi.dev/api/people/').then((json: any) => {
            setUsers(json.results);
        })
    }, [])

    return (
        <div className='cardsContainer' data-testid='cardsContainer'>
         {users ? users.map((user : User, it) => {
                return <Card key={user.url + it} user={user}/>;
         }) : null}
        </div>
    );
}

export default CardsContainer;