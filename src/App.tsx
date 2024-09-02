import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Suspense } from 'react';
import Advocacy from './pages/Advocacy';
import { DataProvider } from './data/data_provider';
import About from './pages/About';
import AnimatedLoading from './components/AnimatedLoading';
import How from './pages/How';
import Why from './pages/Why';
import Footer from './components/Footer';
import PeaceMusicPlayer from './components/PeaceMusicPlayer';



const App = () => {

  return (
    <Suspense fallback={<AnimatedLoading />}>
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Advocacy />} />
            <Route path='/why' element={<Why />} />
            <Route path='/about' element={<About />} />
            <Route path='/how' element={<How />} />
          </Routes>
          <Footer />
          <PeaceMusicPlayer />
        </DataProvider>
      </BrowserRouter>
    </Suspense>
  )
}
export default App

