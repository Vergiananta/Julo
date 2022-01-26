import Dashboard from "../pages/dashboard/dashboard";
import Detail from "../pages/detailMovie/details";
import Error from "../pages/Error";


const routes = [
    {
        path: '/movies',
        component: <Dashboard/>,
        exact: true,
    },
    {
        path: '/movies/:id',
        component: <Detail/>,
        exact: true,
    },
    {
        path: '*',
        component: <Error />
    }
]

export default routes;
