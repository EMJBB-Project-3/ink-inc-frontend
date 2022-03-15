import {Button} from "antd"
import {HeartOutlined} from '@ant-design/icons'

export default function LikeButton({ }) {

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