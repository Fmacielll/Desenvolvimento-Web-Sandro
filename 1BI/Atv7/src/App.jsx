import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Article from './components/Article.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const postData = {
    titulo: "Itachi Uchiha: O Shinobi que Carregou um Fardo Invisível",
    autor: "Portal Ninja",
    data: "10 de Abril de 2026",
    conteudo: "Itachi Uchiha é um dos personagens mais complexos do universo ninja. Conhecido inicialmente como um traidor, sua verdadeira história revela um guerreiro que tomou decisões extremas para proteger sua vila e seu irmão. Sua inteligência, domínio do Sharingan e sacrifício silencioso transformaram sua trajetória em uma das mais marcantes da história."
  };

  const postsRelacionados = [
    "O verdadeiro poder do Mangekyō Sharingan",
    "A relação entre Itachi e Sasuke",
    "Os segredos da Akatsuki",
    "Genjutsus mais poderosos do universo ninja"
  ];

  return (
    <div className="container">
      <Header title="Crônicas do Clã Uchiha" />
      <Navigation />
      <main style={{ display: 'flex', gap: '20px' }}>
        <Article post={postData} />
        <Sidebar links={postsRelacionados} />
      </main>
      <Footer copyright="© 2026 Arquivos Ninja - Todos os direitos reservados" />
    </div>
  );
}

export default App;