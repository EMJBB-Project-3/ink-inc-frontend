import PostCard from "./PostCard.js"
// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';
// import { QUERY_POSTS } from '../utils/queries';



export default function PostList(allPosts) {
   
    // console.log(allPosts.allPosts)
    const postArray = allPosts.allPosts
    // console.log(postArray)

    return (

        <div>
        {/* <h1>hi</h1> */}

            {postArray.map((post, index )=> {
                return <PostCard key={index}post={post}/>
            }
                )}
        </div>
  


    )

    }

