import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) =>( { id: doc.id, data : doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) =>(
            <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
            />
            ))}

            {/* <Post profilePic="https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png" message="Example" username="chris" image="https://picsum.photos/seed/picsum/200/300"/>
            <Post profilePic="https://196034-584727-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/03/Product-Manager.jpg" message="Example" username="chris" image="https://picsum.photos/seed/picsum/200/300"/>
            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ25Xlu7P_IdqZcDjXDwjMKf2WUlAkZCULl8g&usqp=CAU" message="Example" username="chris" image="https://picsum.photos/seed/picsum/200/300"/>
         */}
        </div>
    )
}

export default Feed;
