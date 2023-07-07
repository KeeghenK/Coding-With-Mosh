import { createBrowserRouter } from 'react-router-dom';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

export default router;
