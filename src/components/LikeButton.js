import { useEffect, useState } from 'react'
import { Button } from "antd"
import { HeartOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client';



export default function LikeButton({_id, username }) {
    // console.log(_id)
    const [favorite, setFavorite] = useState(false)



    return (
        <>
            <div>
                <Button
                type='primary'
                className='like-button'
                icon={<HeartOutlined/>}
                ></Button>
            </div>
            <div>
            </div>
        </>
    )
}