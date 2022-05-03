import React, { useState, useEffect } from 'react';
import User from '../../models/User.model';
import Starship from '../../models/Starship.model';
import Vehicle from '../../models/Vehicle.model';
import Film from '../../models/Film.model';
import Planet from '../../models/Planet.model';
import Species from '../../models/Species.model';
import { getMethod } from '../ApiFunctions';
import './Card.css'

interface CardProps {
    user: User;
}

function Card({user} : CardProps) {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [films, setFilms] = useState<Film[]>([]);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [species, setSpecies] = useState<Species[]>([]);
    const [planet, setPlanet] = useState<Planet>();


    useEffect(() => {
        if (user.starships && user.starships.length) {
            user.starships.map((starshipLink : string) => ( 
                getMethod(starshipLink).then((json: any) => {
                    setStarships(starships => [...starships, json]);
                })
            ))
        }
    }, [user.starships])

    useEffect(() => {
        if (user.films && user.films.length) {
            user.films.map((filmLink : string) => (
                getMethod(filmLink).then((json: any) => {
                    setFilms(films => [...films, json]);
                })
            ))
        }
    }, [user.films])

    useEffect(() => {
        if (user.vehicles && user.vehicles.length) {
            user.vehicles.map((vehicleLink : string) => (
                getMethod(vehicleLink).then((json: any) => {
                    setVehicles(vehicles => [...vehicles, json]);
                })
            ))
        }
    }, [user.vehicles])

    useEffect(() => {
        if (user.species && user.species.length) {
            user.species.map((specieLink : string) => (
                getMethod(specieLink).then((json: any) => {
                    setSpecies(species => [...species, json]);
                })
            ))
        }
    }, [user.species])

    useEffect(() => {
        getMethod(user.homeworld).then((json: any) => {
            setPlanet(json);
        })
    }, [user.homeworld])

    return (
        <div className='card'>
            <div className='image'>
                <p className='name'>{user.name}</p>

                {planet ? (
                    <div className='line'>
                        <p className='title'>Planete d'origine :</p>
                        <p>{planet?.name}</p>
                    </div>
                ) : null}
                <link href='https://css.gg/arrow-down.css' rel='stylesheet'></link>
                <i className="p-icon--expand"></i>
                <p className='more'>↓ Détais ↓</p>
                <i className="p-icon--expand"></i>
            </div>
            <div className='content'>
                {films.length ? (
                    <div className='line films'>
                        <p className='title'>Films :</p>
                        {films?.map((film, it) => {
                            return (
                                <p key={film?.url + it}>{film?.title}</p>
                            )
                        })}
                    </div>
                ) : null }

                {starships.length ? (
                    <div className='line starships'>
                        <p className='title'>Vaisseaux :</p>
                        {starships?.map((starship, it) => {
                            return <p key={starship?.url + it}>{starship?.name}</p>
                        })}
                    </div>
                ) : null}

                {vehicles.length ? (
                    <div className='line vehicles'>
                        <p className='title'>Véhicules :</p>
                        {vehicles?.map((vehicle, it) => {
                            return <p key={vehicle?.url + it}>{vehicle?.name}</p>
                        })}
                    </div>
                ) : null}

                {species.length ? (
                    <div className='line species'>
                        <p className='title'>Espèce :</p>
                        {species?.map((specie, it) => {
                            return <p key={specie?.url + it}>{specie?.name}</p>
                        })}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Card;