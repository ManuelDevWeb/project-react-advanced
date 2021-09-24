// Importando elementos para usar GraphQL
import { gql, useMutation } from "@apollo/client";

// Esta mutación devuelve un WebToken
const LOGIN=gql`
    mutation login($input: UserCredentials!){
        login (input: $input)
    }
`;

export const LoginMutation=()=>{
    const [loginMutation, {error, loading}]=useMutation(LOGIN);

    return(
        {loginMutation, error, loading}
    )
}