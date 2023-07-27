import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import CreateGroupProvider from './context/CreateGroupProvider';
import ContactProvider from './context/ContactProvider';

function App() {
  return ( 
    <>
      <CreateGroupProvider>
          <ContactProvider>
              <RouterProvider router={router}/>
          </ContactProvider>
      </CreateGroupProvider>  
    </> 
  )}

export default App;