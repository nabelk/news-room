import { useState, useEffect, useContext } from 'react';
import { ListNews } from './list-news';
import { fetchAPI } from '../api/api';
import { Loading } from './loading';
import { SearchContext } from './context/search/search-context';
import { FiltersModal } from './filters-modal';
import { FiltersContext } from './context/filters/filters-context';

export function News() {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const { filtersValue, setFiltersValue } = useContext(FiltersContext);
    const { category, source } = filtersValue[0];
    const [newsItems, setNewsItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchNews = (url) => {
        fetchAPI(url)
            .then((response) => setNewsItems(response.articles))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    };

    function getUrl() {
        const API_KEY = 'apiKey=212efdf66e99479297cd29ed8454303d';

        let url = 'https://newsapi.org/v2/everything?';

        if (category || source) {
            if (category) url += `q=${category}&`;
            if (source) url += `domains=${source}&`;
            setFiltersValue([
                {
                    category: '',
                    source: '',
                },
            ]);
            setSearchValue('');
            return `${url}${API_KEY}`;
        } else if (searchValue) {
            return `${url}q=${searchValue}&${API_KEY}`;
        } else {
            return `https://newsapi.org/v2/top-headlines?country=us&${API_KEY}`;
        }
    }

    useEffect(() => {
        setLoading(true);
        setError(null);

        const url = getUrl();
        fetchNews(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, filtersValue]);

    if (loading) return <Loading />;
    if (error)
        return (
            <div className='container my-12 mx-auto px-3 md:px-6'>
                <p className='flex items-center justify-center'>A network error was encountered</p>
            </div>
        );

    return (
        <div className='container my-12 mx-auto px-3 md:px-6'>
            <section className='mb-32 text-center'>
                <div className='flex justify-between'>
                    <h2 className='mb-12 pb-4 text-left text-3xl font-bold'>
                        {searchValue ? `Search results for ${searchValue}` : 'Latest Articles'}
                    </h2>
                    <FiltersModal></FiltersModal>
                </div>
                <div className='grid gap-8 lg:grid-cols-3 xl:gap-x-12'>
                    {newsItems.map((item, idx) => {
                        return <ListNews key={idx} item={item} />;
                    })}
                </div>
            </section>
        </div>
    );
}