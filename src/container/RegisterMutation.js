// Importando elementos para usar GraphQL
import { gql, useMutation } from "@apollo/client";

// Esta mutación devuelve un WebToken
const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`;

export const RegisterMutation = () => {
    const [registerMutation, {error,loading}] = useMutation(REGISTER);

    return (
        {registerMutation,error,loading}
    )
}