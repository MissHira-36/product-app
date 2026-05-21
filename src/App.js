import logo from './logo.svg';
import './App.css';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import ProductPage from './pages/ProductPage/ProductPage';
import BookCards from './pages/BookCards/BookCards';
import FooterPage from './pages/FooterPage/FooterPage';
import ThankuPage from './pages/ThankuPage/ThankuPage';
import { BrowserRouter } from 'react-router-dom';
import MyForm from './pages/FormPage/FormPage';
import Routers from './pages/Routes/Routes';
import { ContextProvider } from './useContextHook/productAppContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routers />
        </ContextProvider>
      </BrowserRouter>
      {/* <HeaderPage />
        <ProductPage />
        <BookCards />
        <MyForm/>
        <ThankuPage />
        <FooterPage /> */}

    </>
  );
}

export default App;
