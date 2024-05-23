import { useState, useContext } from 'react';
import { SearchContext } from './context/search/search-context';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Search({ isArticlePage }) {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const [curSearchValue, setCurSearchValue] = useState(searchValue);
    const navigate = useNavigate();

    function checkIsArticlePage() {
        if (isArticlePage) navigate('/');
    }

    function handleSearchFunction(e) {
        switch (true) {
            case e.key === 'Enter':
                checkIsArticlePage();
                setSearchValue(curSearchValue);
                break;
            case e.target.value === '':
                setCurSearchValue(e.target.value);
                setSearchValue('');
                break;
            default:
                setCurSearchValue(e.target.value);
                break;
        }
    }

    return (
        <div className='relative flex'>
            <input
                type='search'
                className='w-full relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary'
                placeholder='Search'
                value={curSearchValue}
                onKeyDown={handleSearchFunction}
                onInput={handleSearchFunction}
            />
        </div>
    );
}

Search.propTypes = {
    isArticlePage: PropTypes.bool.isRequired,
};
