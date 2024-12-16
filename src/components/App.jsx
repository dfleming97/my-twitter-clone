import tweets from '../tweets.json';

function App() {
    return (
        <div>
            {tweets.map((tweet) => (
                <span>tweet.content</span>
            ))}
        </div>
    )
}

export default App;