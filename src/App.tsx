import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImagensParaPdf from './pages/ImagensParaPdf'
import PdfParaImagens from './pages/PdfParaImagens'
import MisturarArquivos from './pages/MisturarArquivos'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagens-para-pdf" element={<ImagensParaPdf />} />
        <Route path="/pdf-para-imagens" element={<PdfParaImagens />} />
        <Route path="/misturar-arquivos" element={<MisturarArquivos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App