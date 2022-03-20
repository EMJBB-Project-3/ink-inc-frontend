import PostCard from "./PostCard.js"

export default function PostList(userPosts) {
   
    // console.log(allPosts.allPosts)
    const postArray = userPosts.userPosts
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