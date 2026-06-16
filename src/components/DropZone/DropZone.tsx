import { useDropzone } from "react-dropzone";

type DropZoneProps = {
    onArquivosAdicionados: (prop: File[]) => void,
    accept: Record<string, string[]>
}

function AreaSoltarArquivos({ onArquivosAdicionados, accept }: DropZoneProps) {
    const { getRootProps, 
        getInputProps, 
        isDragActive 
    } = useDropzone({
        accept,
        onDrop: (props) => {
            onArquivosAdicionados(props)
        }
    })

    return (
        <div {...getRootProps({ className: 'pagina-dropzone' })}>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Solte os arquivos aqui...' : 'Arraste arquivos aqui ou clique para selecionar'}</p>
        </div>
    )
}

export default AreaSoltarArquivos;