import LikeButton from './LikeButton'
import { Card } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

// export default function PostCard({ username, text }) {
export default function PostCard({username}) {
    // console.log(post)
    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div>
                    <h1>{username}</h1>
                    <h1></h1>
                </div>
                <img
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ height: 100 }}
                >
                </img>
                <div>
                    
                </div>

                <div>
                    <LikeButton />
                </div>



                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            </Card>
{/* 
            <TextArea rows={4} placeholder="maxLength is 120" maxLength={120} /> */}
        </>
    )
}