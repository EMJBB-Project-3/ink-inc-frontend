import PostCard from "./PostCard.js"

export default function PostList(userPosts) {
   
    // console.log(allPosts.allPosts)
    const postArray = userPosts.userPosts
    console.log(postArray)

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