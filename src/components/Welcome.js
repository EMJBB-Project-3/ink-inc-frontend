import { useQuery } from '@apollo/client';
import { QUERY_ONE_USER } from "../utils/queries";

export default function Welcome(currentUsername) {
    // console.log(currentUsername)
    const welcomeName= currentUsername.currentUsername
    return (
        <h1>Welcome, {welcomeName}</h1>
    )
}
