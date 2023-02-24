import {Routes, Route, useSearchParams} from 'react-router-dom'
import Header from "./Header";
import NewsListPage from "./NewsListPage";
import NewsPage from "./NewsPage";

function App() {
    const [search,setSearchParams]=useSearchParams();
    function onClickSearch(val){
        if(!!val && !!val.length){
            return setSearchParams({'search':val})
        }
        return setSearchParams()
    }

    return (
      <>
     <Header onClickSearch={onClickSearch} />
          <Routes>
              <Route path='/' element={<NewsListPage search={search.get('search')}/>}/>
              <Route path='/:id' element={<NewsPage/>}/>
          </Routes>
      </>
  );
}

export default App;
