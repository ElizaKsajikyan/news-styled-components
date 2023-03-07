import {Routes, Route, useSearchParams} from 'react-router-dom'
import Header from "./Header";
import NewsListPage from "./NewsListPage";
import NewsPage from "./NewsPage";
import apiHOC from "./HOC/apiHOC";
import FreeVacancies from "./FreeVacancies";

function App() {
    const [search, setSearchParams] = useSearchParams();

    function onClickSearch(val) {
        if (!!val && !!val.length) {
            return setSearchParams({'search': val})
        }
        return setSearchParams()
    }

    const DataNewsListPage = apiHOC(NewsListPage, search.get('search'),'https://api.labor-rights.am/news');
    const DataVacanciesPage = apiHOC(FreeVacancies, search.get('search'),'https://api.labor-rights.am/free-vacancies');

    return (
        <>
            <Header onClickSearch={onClickSearch}/>
            <Routes>
                <Route path='/' element={<DataNewsListPage/>}/>
                <Route path='/:id' element={<NewsPage/>}/>
                <Route path='/free-vacancies' element={<DataVacanciesPage/>}/>
            </Routes>
        </>
    );
};

export default App;
