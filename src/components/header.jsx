import { Search } from './search';
import PropTypes from 'prop-types';

export function Header({ isArticlePage }) {
    return (
        <header className='flex gap-10 items-center sticky z-50 top-0 py-4 px-4 gap-[5px] sm:px-12 bg-[#1e293b]'>
            <h1>Artiselite News</h1>
            <Search isArticlePage={isArticlePage}></Search>
        </header>
    );
}

Header.propTypes = {
    isArticlePage: PropTypes.bool.isRequired,
};
