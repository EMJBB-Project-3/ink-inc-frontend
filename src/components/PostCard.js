import LikeButton from './LikeButton'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Space, Card } from 'antd';
// const { TextArea } = Input;
import '../styles/Post.css'
import pic from '../assets/pexels-djordje-petrovic-1433273.jpg'

// export default function PostCard({ username, text }) {
export default function PostCard(post) {
    // console.log(post)
    const {_id, username, text, favorites} = post.post
    // console.log(_id)
    return (
        <>
        <Space 
        direction="vertical"
        className='card-container'>
            <Card
                hoverable
                style={{ 
                    width: 300, 
                    marginBottom: '30px',
                    border: 'solid black 3px'
                
                }}
            >
                <div>
                <h3>{username}</h3>
                </div>
                <img
                    src= {pic}
                    // src="https://bl6pap004files.storage.live.com/y4md9ohmyjegCSazyDXgJZnqF34fvCF7jp_txz_s1vZ5VCg8XT3NG47_HvBQYEMYJTrdXUaQZvBsUTDffJln3VyZ06Ye4yE61ci-LBiBFvWiHA19klfPmgy1juIsCQEdjGFuzoY7ZcJmCDy1YnCd-bovOudxuzqS0JZAmLvd5zS0CRnh5BMyFg29Jtaob12S8AS?width=577&height=681&cropmode=none"
                    style={{ height: 270 }}
                    alt="a cool tattoo."
                >
                </img>

                <div>
                    <p>{text}</p>
                </div>

                <div>
                    <LikeButton _id={_id} username={username} favorites={favorites}/>
                </div>



                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            </Card>
        </Space>
{/* 
            <TextArea rows={4} placeholder="maxLength is 120" maxLength={120} /> */}
        </>
    )
}