import { useQuery } from '@apollo/client';
import { QUERY_ONE_USER } from "../utils/queries";

export default function Welcome(currentUserID) {
    // console.log(typeof currentUserID.currentUserID)
    const userId = currentUserID.currentUserID
    const { loading, data } = useQuery(QUERY_ONE_USER, {
        variables: {userId:userId},
    });
    console.log(data)
    // const currentUsername = data?.username || [];
    const currentUsername = data?.user.username || [];
    console.log(currentUsername)
    
    return (
        <h1>Welcome, {currentUsername}</h1>
    )
}