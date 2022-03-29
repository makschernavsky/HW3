import './App.css'
import GalleryProvider from './components/contexts/GalleryContext'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <GalleryProvider>
      <div className="container py-3">
        <Header />
        <hr />
        <Main />
        <Footer />
      </div>
    </GalleryProvider>
  )
}

export default App
