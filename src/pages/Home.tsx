import { Link } from "react-router-dom"
import './Home.css'

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1 className="home-title">Conversor de Arquivos</h1>
                <p className="home-subtitle">
                    Converta imagens em PDF, PDFs em imagens, ou misture os dois — tudo no seu navegador.
                </p>
            </header>

            <main className="home-cards">
                <Link to="/imagens-para-pdf" className="card">
                    <div className="card-icon">🖼️</div>
                    <h2 className="card-title">Imagens para PDF</h2>
                    <p className="card-description">
                        Reúna várias imagens em um único arquivo PDF.
                    </p>
                </Link>

                <Link to="/pdf-para-imagens" className="card">
                    <div className="card-icon">📄</div>
                    <h2 className="card-title">PDF para Imagens</h2>
                    <p className="card-description">
                        Converta cada página de um PDF em uma imagem separada.
                    </p>
                </Link>
            </main>

            <footer className="home-footer">
                <p>Desenvolvido por Gustavo Paes Crescêncio</p>
            </footer>
        </div>
    )
}

export default Home