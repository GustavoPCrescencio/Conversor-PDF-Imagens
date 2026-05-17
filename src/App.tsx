import { useState } from 'react'
import './App.css'
import MyDropzone from './components/DropZone/DropZone'
import { converterPdfEmImagens } from './pages/PdfToImage/PdfToImage'
import SortableList from './components/SortableList/SortableList'
import { converterImagensEmPdf } from './pages/ImageToPdf/ImageToPdf'
import { saveAs } from 'file-saver'

function App() {
  const [arquivos, setArquivos] = useState<string[]>([])
  
  const baixarArquivosPdf = async (arquivos: string[]) => {
    const bytes = await converterImagensEmPdf(arquivos)
    const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' })
    saveAs(blob, 'convertido.pdf')
  }

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

    {arquivos.length == 0 ? 
      <div></div>
      : <button onClick={() => baixarArquivosPdf(arquivos)}>Converter para PDF</button>
    }
    </section>
)
}

export default App