import LikeButton from './LikeButton'
import { Card } from 'antd';
// const { Meta } = Card;



export default function PostCard({ username, text }) {

    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div>
                    <h3>{username}</h3>
                </div>
                <img
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ height: 100 }}
                >
                </img>
                <div>
                    <p>{text}</p>
                </div>

                <div>
                    <LikeButton />
                </div>



                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            </Card>
        </>
    )
}