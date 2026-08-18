import React, { useState, useEffect, useRef } from 'react';
import BibleColumn from './components/BibleColumn';
import LegalPopup from './components/LegalPopup';
import { HeroHome } from './components/HeroHome';
import { useBibleStore } from './store/bibleStore';

export default function App() {
  const { ara, loadBibles } = useBibleStore();

  useEffect(() => {
    loadBibles();
  }, [loadBibles]);

  const [book, setBook] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [checked, setChecked] = useState(true);
  const [legalPopup, setLegalPopup] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentBookData = ara[book] || { chapters: [] };

  // Refs das 4 colunas para sincronizar o scroll entre elas
  const columnRefs = useRef([]);
  const isSyncingScroll = useRef(false);

  const handleColumnScroll = (index) => (e) => {
    if (!checked) return; // só sincroniza se "Sincronizado" estiver marcado
    if (isSyncingScroll.current) return; // evita loop entre as colunas

    isSyncingScroll.current = true;
    const { scrollTop } = e.target;

    columnRefs.current.forEach((el, i) => {
      if (el && i !== index) {
        el.scrollTop = scrollTop;
      }
    });

    requestAnimationFrame(() => {
      isSyncingScroll.current = false;
    });
  };

  return (
    <div className={`app-wrapper ${theme} min-vh-100 d-flex flex-column align-items-center`}>
      
      {/* 1. Seção de Introdução (Hero) */}
      <HeroHome />

      {/* 2. Barra de Navegação Pílula */}
      <div className="polyglot-nav-bar px-3">
        <div className="nav-container-inner">
          
          {/* LADO ESQUERDO: Livro, Capítulo e Sincronizado */}
          <div className="nav-controls-row">
            
            <div className="select-group">
              <span className="nav-label">Livro:</span>
              <select 
                className="custom-select" 
                value={book} 
                onChange={(e) => {
                  setBook(Number(e.target.value));
                  setChapter(0); 
                }}
              >
                {ara.map((b, index) => (
                  <option key={index} value={index}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <span className="nav-label">Cap:</span>
              <select 
                className="custom-select" 
                value={chapter} 
                onChange={(e) => setChapter(Number(e.target.value))}
              >
                {currentBookData.chapters.map((_, index) => (
                  <option key={index} value={index}>{index + 1}</option>
                ))}
              </select>
            </div>

            <div className="lock-control">
              <input 
                className="custom-checkbox m-0" 
                type="checkbox" 
                id="syncCheck" 
                checked={checked} 
                onChange={(e) => setChecked(e.target.checked)} 
              />
              <label className="text-current m-0 ms-2" htmlFor="syncCheck" style={{ cursor: 'pointer' }}> 
                Sincronizado 
              </label>
            </div>

          </div>

          {/* LADO DIREITO: Ícone de Tema */}
          <div className="nav-actions-row">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              title="Alternar Tema Claro / Escuro"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Corpo Principal com as Colunas da Bíblia */}
      <div className="bible-container w-100 px-3 mb-5">
        <BibleColumn 
          key={`nvi-${book}-${chapter}`}
          ref={(el) => (columnRefs.current[0] = el)}
          onScroll={handleColumnScroll(0)}
          book={book} 
          chapter={chapter} 
          defaultVersion="nvi" 
          theme={theme}
          style={checked ? { height: 'auto' } : { height: '80vh' }} 
        />
        <BibleColumn 
          key={`naa-${book}-${chapter}`}
          ref={(el) => (columnRefs.current[1] = el)}
          onScroll={handleColumnScroll(1)}
          book={book} 
          chapter={chapter} 
          defaultVersion="naa" 
          theme={theme}
          style={checked ? { height: 'auto' } : { height: '80vh' }} 
        />
        <BibleColumn 
          key={`ara-${book}-${chapter}`}
          ref={(el) => (columnRefs.current[2] = el)}
          onScroll={handleColumnScroll(2)}
          book={book} 
          chapter={chapter} 
          defaultVersion="ara" 
          theme={theme}
          style={checked ? { height: 'auto' } : { height: '80vh' }} 
        />
        <BibleColumn 
          key={`arc-${book}-${chapter}`}
          ref={(el) => (columnRefs.current[3] = el)}
          onScroll={handleColumnScroll(3)}
          book={book} 
          chapter={chapter} 
          defaultVersion="arc" 
          theme={theme}
          style={checked ? { height: 'auto' } : { height: '80vh' }} 
        />
      </div>

      <LegalPopup model={legalPopup} setModel={setLegalPopup} />
    </div>
  );
}