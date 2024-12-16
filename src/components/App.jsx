import tweets from '../tweets.json';
import Tweet from './Tweet';

function App() {
    return (
        <div className='timeline'>
            {tweets.map(({ id, user, created_on, content }) => (
                <Tweet key={id} user={user} createdOn={created_on}>
                    {content}
                </Tweet>
            ))}
        </div>
    )
}

export default App;