import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
/*export const AppContext = createContext();*/

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
    const fetchTweets = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.org/posts');
        const data = await response.json();
        const formattedTweets = data.map((post) => ({
          id: post.userId,
          content: post.thumbnail,
          user: { name: 'API User', profilePicture: 'default.jpg'},
        }));
setTweets(formattedTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    }
    fetchTweets();
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  



      

  );
};

export default App;
