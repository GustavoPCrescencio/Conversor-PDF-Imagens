import * as pdfjsLib from 'pdfjs-dist'

export const converterPdfEmImagens = async (arquivo: File) : Promise<string[]> => {
    const buffer = await arquivo.arrayBuffer()
    const pdf = await pdfjsLib.getDocument(buffer).promise
    const pages = []
    const urls = []

    for(let page = 1; page <= pdf.numPages; page++) {
        pages[page] = await pdf.getPage(page)
        
        const canvas = document.createElement('canvas')
        const canvasContext = canvas.getContext('2d')
        
        if(!canvasContext) {
            console.log('Contexto vazio')
            return []
        }

        const viewport = pages[page].getViewport({ scale: 1.5 })
        canvas.width = viewport.width
        canvas.height = viewport.height
        
        await pages[page].render({
            canvas: canvas,
            canvasContext: canvasContext,
            viewport: viewport
        }).promise

        urls.push(canvas.toDataURL())
    }

    return urls
}