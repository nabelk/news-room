import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [filtersValue, setFiltersValue] = useState([
        {
            category: '',
            source: '',
        },
    ]);

    return (
        <FiltersContext.Provider value={{ filtersValue, setFiltersValue }}>
            {children}
        </FiltersContext.Provider>
    );
};

FiltersProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
