import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

export function ListNews({ item }) {
    return (
        <div className='mb-6 lg:mb-0'>
            <div className='relative h-full block rounded-lg bg-neutral-700'>
                <div className='flex'>
                    <div
                        className='relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 w-full'
                        data-te-ripple-init
                        data-te-ripple-color='light'
                    >
                        <img
                            src={item.urlToImage || '/img-not-found.jpg'}
                            className='w-full md:h-[360px]'
                        />
                        <Link to='/article' state={item}>
                            <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]'></div>
                        </Link>
                    </div>
                </div>
                <div className='p-6 lg:h-full'>
                    <h5 className='mb-3 text-lg font-bold lg:h-[80px] overflow-hidden'>
                        {item.title || 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                    </h5>
                    <p className='mb-2 text-neutral-500 dark:text-neutral-300 lg:h-[40px]'>
                        <small>
                            Published <u> {moment(item.publishedAt).format('YYYY-MM-DD')}</u> by{' '}
                            <a href='#!'>{item.author || 'unknown'}</a>
                        </small>
                    </p>
                    <p className='mb-2 pb-2 lg:h-[140px] overflow-hidden'>
                        {item.description || 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                    </p>
                    <Link
                        data-te-ripple-init
                        data-te-ripple-color='light'
                        className='inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                        to='/article'
                        state={item}
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

ListNews.propTypes = {
    item: PropTypes.shape({
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string.isRequired,
        author: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
};
