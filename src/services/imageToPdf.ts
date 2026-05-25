import { PDFDocument } from "pdf-lib"

export const converterImagensEmPdf = async (lista : string[]) : Promise<Uint8Array> => {
    const pdfDoc = await PDFDocument.create()
    
    for(let pagina = 0; pagina < lista.length; pagina++) {
        const url = lista[pagina]

        const pdfEmBytes = await fetch(url).then(res => res.arrayBuffer())

        const imagemEmJpg = await pdfDoc.embedJpg(pdfEmBytes)
        
        const paginaDaImagem = pdfDoc.addPage()
        const { width, height } = imagemEmJpg

        paginaDaImagem.setSize(width, height)

        paginaDaImagem.drawImage(imagemEmJpg, {
            x: 0,
            y: 0,
            width: width,
            height: height
        })
    }
    return await pdfDoc.save()
}