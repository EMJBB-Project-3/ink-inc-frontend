import PostCard from "./PostCard.js"
// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';
// import { QUERY_POSTS } from '../utils/queries';



export default function PostList(data) {
    // console.log(data)
    // console.log(data.data.allPosts)
    const postArray = data.data.allPosts
    console.log(postArray)

    return (
        // <h1>hi</h1>
        // <div>
        //     {postArray.map(post => {
        //         console.log(post)
        //     })}
        //     <h1>hi</h1>
        // </div>
    
        // <div>
        //     {postArray.map(post => {
        //         return <h1>{post.username}</h1>
        //     }
        //         )}
        // </div>

        <div>
            {postArray.map((post, index )=> {
                return <PostCard key={index}post={post}/>
            }
                )}
        </div>


    )

    }

