import React from 'react';
// Importando elementos para usar GraphQL
import { gql, useMutation } from "@apollo/client";

const MUTATION_LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`;

export const ToggleLikeMutation=()=>{
    const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LIKE_PHOTO);

    return(
        {mutation, mutationLoading, mutationError}
    )
}