import { useEffect, useState } from 'react'
import { Button } from "antd"
import { HeartOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client';



export default function LikeButton({_id, username, favorites }) {
    // console.log(_id)
    const [favorite, setFavorite] = useState(false)



    return (
        <>
            <div style={{display:'flex'}}>
                <Button
                type='primary'
                className='like-button'
                icon={<HeartOutlined/>}
                style={{marginRight:'10px'}}
                ></Button>
                <p>{favorites}</p>

            </div>
        </>
    )
}