import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment-analysis';
import Sidebar from './components/Sidebar';
import WebsiteVisitors from './components/Website-visitors';
import AverageRating from './components/Average-rating';
import './App.css';

function App() {
  return (
    <div className='app'>
        <AverageRating/>
        <Reviews/>
        <Sidebar/>
        <WebsiteVisitors/>
        <Sentiment/>
    </div>
  );
}

export default App;
