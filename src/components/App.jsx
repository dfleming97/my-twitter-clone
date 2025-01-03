import { useState } from 'react';
import { nanoid } from 'nanoid';
import ComposeForm from './ComposeForm';
import Timeline from './Timeline';
import { FaXRay } from 'react-icons/fa';
import './App.css';

import initialTweets from '../tweets.json';

const CURRENT_USER = 'deetray';


function App() {
    const [tweets, setTweets] =useState(initialTweets);

    const handlePostTweet = (content) => {
        const newTweet = {
            content,
            id: nanoid(),
            created_on: Date(Date.now()),
            user: CURRENT_USER,
            comments_count: 0,
            retweets_count: 0,
            favorites_count: 0,
        }
        setTweets([...tweets, newTweet])
    }

    return (
        <div className='app'>
            <FaXRay className='app-logo' size="2em" />
            <ComposeForm onSubmit={handlePostTweet} />
           <div className='separator'></div>
           <Timeline tweets={tweets} />
        </div>
    )
}

export default App;