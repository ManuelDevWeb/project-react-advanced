import React from 'react'
// Importando elementos para usar GraphQL
import {gql, useQuery} from "@apollo/client";
// Importando componente ListOfFavs
import {ListOfFavs} from '../components/ListOfFavs';

// Query para obtener las fotos a las que se le da like
const GET_FAVORITES=gql`
    query getFavs{
        favs{
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

const GetFavorites=()=>{
    const {data,error,loading}=useQuery(GET_FAVORITES,{
        fetchPolicy: 'cache-and-network'
    });

    return {data,error,loading};
}

export const RenderPropFavs=()=>{
    const {data,error,loading}=GetFavorites();

    if(loading) return <p>Loading...</p>

    if(error) return <p>Error...</p>

    const {favs}=data;

    return <ListOfFavs favs={favs}/>
}


