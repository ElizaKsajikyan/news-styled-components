import {Routes, Route, useSearchParams} from 'react-router-dom'
import Header from "./Header";
import NewsListPage from "./NewsListPage";
import NewsPage from "./NewsPage";
import apiHOC from "./HOC/apiHOC";

function App() {
    const [search, setSearchParams] = useSearchParams();

    function onClickSearch(val) {
        if (!!val && !!val.length) {
            return setSearchParams({'search': val})
        }
        return setSearchParams()
    }

    const DataNewsListPage = apiHOC(NewsListPage, search.get('search'))

    return (
        <>
            <Header onClickSearch={onClickSearch}/>
            <Routes>
                <Route path='/' element={<DataNewsListPage/>}/>
                <Route path='/:id' element={<NewsPage/>}/>
            </Routes>
        </>
    );
};

export default App;
