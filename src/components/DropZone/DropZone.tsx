import { useDropzone } from "react-dropzone";

type DropZoneProps = {
    onArquivosAdicionados: (prop: File[]) => void,
    accept: Record<string, string[]>
}

function AreaSoltarArquivos({ onArquivosAdicionados, accept } : DropZoneProps) {

    const {
        acceptedFiles,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept,
        onDrop: (props) => {
            onArquivosAdicionados(props)
        }
})
    const arquivos = acceptedFiles.map(file => (
        <li 
            key={file.name}
            style={{ listStyle: 'none' }}
        >
            {file.name} | {file.type}
        </li>
    ))

    return (
        <section>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Arraste arquivos aqui ou clique para selecionar</p>
            </div>
            <aside>
                <h4>Arquivos</h4>
                <ul>{arquivos}</ul>
            </aside>
        </section>
    )
}

export default AreaSoltarArquivos;