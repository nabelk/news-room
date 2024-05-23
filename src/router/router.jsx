import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from '../components/header';
import { News } from '../components/news-items';
import { Article } from '../components/article-page';
import { SearchProvider } from '../components/context/search/search-context';
import { FiltersProvider } from '../components/context/filters/filters-context';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <SearchProvider>
                        <FiltersProvider>
                            <Header isArticlePage={false} />
                            <News />
                        </FiltersProvider>
                    </SearchProvider>
                </>
            ),
        },
        {
            path: 'article',
            element: (
                <>
                    <SearchProvider>
                        <Header isArticlePage={true} />
                        <Article />
                    </SearchProvider>
                </>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}
