import { DragDropProvider } from "@dnd-kit/react"
import { isSortable, useSortable } from "@dnd-kit/react/sortable"
import { useEffect, useState } from "react"


function ItemArrastavel({ id, src, index }: { id: string, src: string, index: number }) {
    const { ref } = useSortable({
        id: id,
        index: index
    })

    return (
        <li
            key={id}
            style={{ listStyle: 'none' }}
            ref={ref}
        >
            <img
                src={src}
                alt={id}
                style={{
                    width: '500px',
                    height: '500px',
                    objectFit: 'contain'
                }}
            />
        </li>
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
                if(e.canceled) return

                const {source} = e.operation

                if(isSortable(source)) {
                    const {initialIndex, index} = source

                    if(initialIndex !== index) {
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
            {lista.map((arquivo, index) =>
                <div key={arquivo}>
                    <ItemArrastavel  
                        id={arquivo}
                        index={index}
                        src={arquivo}
                        />
                </div>
            )}
        </DragDropProvider>
    )
}

export default OrganizarLista