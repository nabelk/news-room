import { useLocation } from 'react-router-dom';
import moment from 'moment';

export function Article() {
    const location = useLocation();
    const { state } = location;

    return (
        <div className='relative p-4'>
            <div className='max-w-3xl mx-auto'>
                <div className='mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
                    <div className=''>
                        <h1 className='font-bold text-4xl'>{state.title}</h1>
                        <div className='py-5 text-sm font-regular flex'>
                            <span className='mr-3 flex flex-row items-center'>
                                <svg
                                    className=''
                                    fill='currentColor'
                                    height='13px'
                                    width='13px'
                                    version='1.1'
                                    id='Layer_1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    x='0px'
                                    y='0px'
                                    viewBox='0 0 512 512'
                                >
                                    <g>
                                        <g>
                                            <path
                                                d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z'
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                                <span className='ml-1'>{moment(state.publishedAt).fromNow()}</span>
                            </span>

                            <a href='#' className='flex flex-row items-center hover:  mr-3'>
                                <svg
                                    className=''
                                    fill='currentColor'
                                    height='16px'
                                    aria-hidden='true'
                                    role='img'
                                    focusable='false'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                                    ></path>
                                    <path d='M0 0h24v24H0z' fill='none'></path>
                                </svg>
                                <span className='ml-1'>{state.author || 'unknown'}</span>
                            </a>
                        </div>
                        <hr />
                        <p className='text-base leading-8 my-5'>{state.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
