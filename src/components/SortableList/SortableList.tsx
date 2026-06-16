import { DragDropProvider } from "@dnd-kit/react"
import { isSortable, useSortable } from "@dnd-kit/react/sortable"
import { useEffect, useState } from "react"
import './SortableList.css'

function ItemArrastavel({ id, src, index }: { id: string, src: string, index: number }) {
    const { ref } = useSortable({ id, index })

    return (
        <div className="sortable-item" ref={ref}>
            <img src={src} alt={`imagem-${index}`} />
        </div>
    )
}

function OrganizarLista({ listaInicial }: { listaInicial: string[] }) {
    const [lista, setLista] = useState<string[]>(listaInicial)

    useEffect(() => {
        setLista(listaInicial)
    }, [listaInicial])

    return (
        <DragDropProvider
            onDragEnd={(e) => {
                if (e.canceled) return
                const { source } = e.operation
                if (isSortable(source)) {
                    const { initialIndex, index } = source
                    if (initialIndex !== index) {
                        setLista((i) => {
                            const novosItens = [...i]
                            const [removido] = novosItens.splice(initialIndex, 1)
                            novosItens.splice(index, 0, removido)
                            return novosItens
                        })
                    }
                }
            }}
        >
            <div className="sortable-grid">
                {lista.map((arquivo, index) =>
                    <ItemArrastavel
                        key={arquivo}
                        id={arquivo}
                        index={index}
                        src={arquivo}
                    />
                )}
            </div>
        </DragDropProvider>
    )
}

export default OrganizarLista