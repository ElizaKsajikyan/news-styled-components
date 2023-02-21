import {Routes,Route} from 'react-router-dom'
import Header from "./Header";
import NewsListPage from "./NewsListPage";
import SearchPage from "./SearchPage";
import NewsPage from "./NewsPage";

function App() {
  return (
      <>
     <Header />
          <Routes>
              <Route path='/' element={<NewsListPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/:id' element={<NewsPage/>}/>
          </Routes>
      </>
  );
}

export default App;
