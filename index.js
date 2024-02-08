
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App'
import dotenv from 'dotenv';

dotenv.config();

const domNode = document.getElementById('root');
const root = createRoot(domNode);
import routes from './App.routes'
root.render(<RouterProvider router={routes} />);