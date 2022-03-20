import PostCard from "./PostCard.js"

import { useQuery } from '@apollo/client';

export default function UserPosts(userPosts) {
   
//    console.log(userPosts.userPosts.userPosts)
    const postArray = userPosts.userPosts.userPosts
    // console.log(postArray)

    return (

        <div>
            <div>
                <h2>My Posts</h2>
            </div>

            {postArray.map((post, index )=> {
                return <PostCard key={index}post={post}/>
            }
                )}
        </div>

    )

    }