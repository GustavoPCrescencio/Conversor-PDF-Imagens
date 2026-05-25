import { useState } from 'react'
import MyDropzone from '../components/DropZone/DropZone'
import saveAs from 'file-saver'
import SortableList from '@/components/SortableList/SortableList'
import { converterPdfEmImagens } from '@/services/pdfToImage'
import JSZip from 'jszip'

function PdfParaImagens () {
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

        for(let image = 0; image < arquivos.length; image++) {
            const url = arquivos[image]
            const bytes = await fetch(url).then(res => res.blob()) 
            zip.file(`imagem-${image}.png`, bytes)
        }
        const imagensBlob = await zip.generateAsync({ type: 'blob' })
        saveAs(imagensBlob, 'imagens compactadas')
    }

    return (
        <section className='section'>
            <div className='container'>
                <MyDropzone
                    onArquivosAdicionados={(e => processarArquivos(e))}
                    accept={{
                        'application/pdf': ['.pdf']
                    }}
                />
                <SortableList listaInicial={arquivos} />
            </div>

            {arquivos.length == 0 ?
                <div></div>
                : <button onClick={() => baixarImagensZip(arquivos)}>Baixar Imagens</button>
            }
        </section>
    )
}

export default PdfParaImagens