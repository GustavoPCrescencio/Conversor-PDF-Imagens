import { useState } from 'react'
import MyDropzone from '../components/DropZone/DropZone'
import saveAs from 'file-saver'
import SortableList from '@/components/SortableList/SortableList'
import { converterPdfEmImagens } from '@/services/pdfToImage'
import JSZip from 'jszip'
import { Link } from 'react-router-dom'
import './PdfParaImagens.css'

function PdfParaImagens() {
    const [arquivos, setArquivos] = useState<string[]>([])

    const processarArquivos = async (lista: File[]) => {
        const resultado = await Promise.all(lista.map(async arquivo => {
            const arquivosConvertidos = await converterPdfEmImagens(arquivo)
            return arquivosConvertidos
        }))
        setArquivos(prev => [...prev, ...resultado.flat()])
    }

    const baixarImagensZip = async (arquivos: string[]) => {
        const zip = new JSZip()
        for (let image = 0; image < arquivos.length; image++) {
            const url = arquivos[image]
            const bytes = await fetch(url).then(res => res.blob())
            zip.file(`imagem-${image}.png`, bytes)
        }
        const imagensBlob = await zip.generateAsync({ type: 'blob' })
        saveAs(imagensBlob, 'imagens-compactadas.zip')
    }

    return (
        <section className='pagina'>
            <header className='pagina-header'>
                <Link to="/" className='pagina-voltar'>← Voltar</Link>
                <h1 className='pagina-titulo'>PDF para Imagens</h1>
            </header>

            <MyDropzone
                onArquivosAdicionados={(e => processarArquivos(e))}
                accept={{
                    'application/pdf': ['.pdf']
                }}
            />

            {arquivos.length === 0
                ? <p className='pagina-lista-vazia'>Nenhum PDF adicionado ainda.</p>
                : <div style={{ width: '100%' }}>
                    <SortableList listaInicial={arquivos} />
                  </div>
            }

            {arquivos.length > 0 &&
                <div className='pagina-acoes'>
                    <button
                        className='pagina-botao'
                        onClick={() => baixarImagensZip(arquivos)}
                    >
                        Baixar Imagens
                    </button>
                </div>
            }
        </section>
    )
}

export default PdfParaImagens