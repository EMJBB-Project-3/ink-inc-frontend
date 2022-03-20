import { useQuery } from '@apollo/client';
import { QUERY_ONE_USER } from "../utils/queries.js";
import PostCard from "./PostCard.js"

export default function FavoritePosts(favoritePosts) {
console.log(favoritePosts)
const user = favoritePosts.favoritePosts.user
console.log(user)


//    const { loading, data } = useQuery(QUERY_ONE_USER, {
//     variables: { userId: userId}
//   });
//   console.log(data.user.favoritePosts)

// const favoritePostsArray = data.user.favoritePosts
// console.log(favoritePostsArray)

    return (
        <div>
            <h1>Favorite Posts</h1>

            <div>
                {user.favoritePosts.map((index, post) => {
                    return <PostCard key={index}post={post}/>
                })
                }
            </div>

        </div>
    )

}