# 📄 Conversor de PDF e Imagens

Aplicação web para conversão de arquivos entre formatos PDF e imagem, desenvolvida 100% no lado do cliente — sem servidor, sem login, sem armazenamento de dados.

---

## 🚀 Funcionalidades

- **Imagens → PDF** — Selecione ou arraste imagens (PNG, JPG, JPEG) e gere um único arquivo PDF
- **PDF → Imagens** — Converta cada página de um ou mais PDFs em imagens PNG compactadas em um arquivo `.zip`
- **Reordenação por Drag and Drop** — Arraste as miniaturas para definir a ordem antes de converter
- **Download direto no navegador** — Nenhum dado é enviado para servidores externos

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| React + TypeScript | Interface e lógica da aplicação |
| Vite | Bundler e ambiente de desenvolvimento |
| pdfjs-dist | Renderização de páginas PDF em imagens |
| pdf-lib | Criação de PDFs a partir de imagens |
| @dnd-kit/react | Drag and drop para reordenação |
| react-dropzone | Área de upload de arquivos |
| jszip | Compactação de imagens em arquivo .zip |
| file-saver | Download de arquivos no navegador |
| react-router-dom | Navegação entre páginas |

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── DropZone/          # Área de upload de arquivos
│   └── SortableList/      # Lista de miniaturas com drag and drop
├── pages/
│   ├── Home.tsx           # Página inicial com as três opções
│   ├── ImagensParaPdf.tsx # Conversor de imagens em PDF
│   ├── PdfParaImagens.tsx # Conversor de PDF em imagens
│   └── MisturarArquivos.tsx # Mistura de PDFs e imagens
├── services/
│   ├── imageToPdf.ts      # Lógica de conversão de imagens em PDF
│   └── pdfToImage.ts      # Lógica de conversão de PDF em imagens
└── main.tsx
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/GustavoPCrescencio/Conversor-PDF-Imagens.git

# Entre na pasta do projeto
cd Conversor-PDF-Imagens

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 📸 Como usar

### Imagens → PDF

1. Acesse **Imagens para PDF** na página inicial
2. Arraste ou selecione imagens (PNG, JPG, JPEG)
3. Reordene as imagens arrastando as miniaturas
4. Clique em **Converter para PDF**
5. O arquivo é baixado automaticamente

### PDF → Imagens

1. Acesse **PDF para Imagens** na página inicial
2. Arraste ou selecione um ou mais PDFs
3. Clique em **Baixar Imagens**
4. Um arquivo `.zip` com todas as páginas em PNG é baixado

---

## 🔒 Privacidade

Todos os arquivos são processados localmente no navegador do usuário. Nenhum arquivo é enviado para servidores externos ou armazenado em banco de dados.

---

## 👨‍💻 Autor

Desenvolvido por **Gustavo Crescencio**

- [LinkedIn](https://www.linkedin.com/in/gustavo-paes-cresc%C3%AAncio-4a6412217/)
- [GitHub](https://github.com/GustavoPCrescencio)

---

## 📝 Licença

Este projeto está sob a licença MIT.