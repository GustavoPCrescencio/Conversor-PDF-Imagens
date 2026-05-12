import { useState } from 'react'
import './App.css'
import MyDropzone from './components/DropZone/DropZone'
import { converterPdfEmImagens } from './pages/PdfToImage/PdfToImage'
import SortableList from './components/SortableList/SortableList'

function App() {
  const [arquivos, setArquivos] = useState<string[]>([])
  
  const processarArquivos = async (lista :  File[]) => {
    const resultado = await Promise.all(lista.map(async arquivo => {
      if(arquivo.type === 'application/pdf') {
        const arquivosConvertidos = await converterPdfEmImagens(arquivo)
        return arquivosConvertidos 
      } else {
        const fileParaURL = URL.createObjectURL(arquivo)
        return fileParaURL
      }
    }))

    setArquivos(prev => [...prev, ...resultado.flat()])
  }

  return (
    <section className='section'>
      <div className='container'>
        <MyDropzone onArquivosAdicionados={(e => processarArquivos(e))}/>
        <SortableList listaInicial={arquivos}/>
      </div>     
    </section>
  )
}

export default App