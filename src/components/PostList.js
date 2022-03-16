import PostCard from "./PostCard.js"
// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';
// import { QUERY_POSTS } from '../utils/queries';



export default function PostList(data) {
    console.log(data)
    console.log(typeof data)
  
    console.log(data.allPosts)

        return (
        <PostCard/>
    )

    }

