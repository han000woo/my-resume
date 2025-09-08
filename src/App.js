import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import sectionsData from './data/sectionsData';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {sectionsData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            type={section.type}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
