import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import Modal from './components/Modal';
import { Routes, Route } from 'react-router-dom';
import { useModalContext } from './contexts/ModalContext';
import CaseStudyFWM from './components/CaseStudyFWM';
import CaseStudyWishlist from './components/CaseStudyWishlist';
import CaseStudyPlaylists from './components/CaseStudyPlaylists';

function App() {
  const { isModal, resetModal, modalContent } = useModalContext();

  return (
    <div className="App">
      <Modal isModal={isModal} resetModal={resetModal} content={modalContent} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/flow-with-megmo" element={<CaseStudyFWM />} />
        <Route path="/wishlist" element={<CaseStudyWishlist />} />
        <Route path="/playlist-palette" element={<CaseStudyPlaylists />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
