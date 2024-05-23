import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FiltersContext } from './context/filters/filters-context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#1e293b',
    width: 400,
    boxShadow: 24,
    p: 4,
};

export function FiltersModal() {
    const { filtersValue, setFiltersValue } = useContext(FiltersContext);
    const [curFiltersValue, setCurFiltersValue] = useState(filtersValue);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleFiltersChange(e) {
        const { name, value } = e.target;
        setCurFiltersValue(
            curFiltersValue.map((filter) => ({
                ...filter,
                [name]: value,
            })),
        );
    }

    function handleFiltersSubmit() {
        setFiltersValue(curFiltersValue);
    }

    return (
        <div>
            <Button onClick={handleOpen}>Filters &#9776;</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <form className='flex border-t border-gray-200 lg:border-t-0'>
                        <fieldset className='w-full'>
                            <legend className='block w-full px-5 py-3 text-xs font-medium'>
                                Category
                            </legend>

                            <div className='space-y-2 px-5 py-6'>
                                <div className='flex items-center'>
                                    <input
                                        id='Technology'
                                        type='radio'
                                        name='category'
                                        value='Technology'
                                        className='h-5 w-5 rounded border-gray-300'
                                        onChange={handleFiltersChange}
                                    />

                                    <label
                                        htmlFor='Technology'
                                        className='ml-3 text-sm font-medium'
                                    >
                                        {' '}
                                        Technology{' '}
                                    </label>
                                </div>

                                <div className='flex items-center'>
                                    <input
                                        id='Travel'
                                        type='radio'
                                        name='category'
                                        value='Travel'
                                        className='h-5 w-5 rounded border-gray-300'
                                        onChange={handleFiltersChange}
                                    />

                                    <label htmlFor='Travel' className='ml-3 text-sm font-medium'>
                                        {' '}
                                        Travel{' '}
                                    </label>
                                </div>

                                <div className='flex items-center'>
                                    <input
                                        id='Finance'
                                        type='radio'
                                        name='category'
                                        value='Finance'
                                        className='h-5 w-5 rounded border-gray-300'
                                        onChange={handleFiltersChange}
                                    />

                                    <label htmlFor='Finance' className='ml-3 text-sm font-medium'>
                                        {' '}
                                        Finance{' '}
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className='w-full'>
                            <legend className='block w-full  px-5 py-3 text-xs font-medium'>
                                Source
                            </legend>

                            <div className='space-y-2 px-5 py-6'>
                                <div className='flex items-center'>
                                    <input
                                        id='Tech Crunch'
                                        type='radio'
                                        name='source'
                                        value='techcrunch.com'
                                        className='h-5 w-5 rounded border-gray-300'
                                        onChange={handleFiltersChange}
                                    />

                                    <label
                                        htmlFor='Tech Crunch'
                                        className='ml-3 text-sm font-medium'
                                    >
                                        {' '}
                                        Tech Crunch{' '}
                                    </label>
                                </div>

                                <div className='flex items-center'>
                                    <input
                                        id='BBC'
                                        type='radio'
                                        name='source'
                                        value='bbc.co.uk'
                                        className='h-5 w-5 rounded border-gray-300'
                                        onChange={handleFiltersChange}
                                    />

                                    <label htmlFor='BBC' className='ml-3 text-sm font-medium'>
                                        {' '}
                                        BBC{' '}
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div>
                        <div className='flex justify-end border-t border-gray-200 px-5 py-3'>
                            <button
                                onClick={handleFiltersSubmit}
                                type='button'
                                className='rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95'
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
