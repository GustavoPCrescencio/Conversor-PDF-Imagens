import { useState } from 'react'
import MyDropzone from '../components/DropZone/DropZone'
import SortableList from '../components/SortableList/SortableList'
import { converterImagensEmPdf } from '../services/imageToPdf'
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom'
import './ImagensParaPdf.css'

function ImagensParaPdf() {
    const [arquivos, setArquivos] = useState<string[]>([])

    const baixarArquivosPdf = async (arquivos: string[]) => {
        const bytes = await converterImagensEmPdf(arquivos)
        const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' })
        saveAs(blob, 'convertido.pdf')
    }

    const processarArquivos = async (lista: File[]) => {
        const resultado = await Promise.all(lista.map(async arquivo => {
            const fileParaURL = URL.createObjectURL(arquivo)
            return fileParaURL
        }))
        setArquivos(prev => [...prev, ...resultado.flat()])
    }

    return (
        <section className='pagina'>
            <header className='pagina-header'>
                <Link to="/" className='pagina-voltar'>← Voltar</Link>
                <h1 className='pagina-titulo'>Imagens para PDF</h1>
            </header>

            <div className='pagina-dropzone'>
                <MyDropzone
                    onArquivosAdicionados={(e => processarArquivos(e))}
                    accept={{
                        'image/png': ['.png'],
                        'image/jpeg': ['.jpeg', '.jpg']
                    }}
                />
            </div>

            {arquivos.length === 0
                ? <p className='pagina-lista-vazia'>Nenhuma imagem adicionada ainda.</p>
                : <div className='pagina-lista'>
                    <SortableList listaInicial={arquivos} />
                </div>
            }

            {arquivos.length > 0 &&
                <div className='pagina-acoes'>
                    <button
                        className='pagina-botao'
                        onClick={() => baixarArquivosPdf(arquivos)}
                    >
                        Converter para PDF
                    </button>
                </div>
            }
        </section>
    )
}

export default ImagensParaPdf