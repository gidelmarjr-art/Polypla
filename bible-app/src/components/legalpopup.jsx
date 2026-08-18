import React from 'react';

export default function LegalPopup({ model, setModel }) {
  // Se o model for falso, não renderiza nada na tela
  if (!model) return null;

  return (
    <div 
      style={{ display: 'block' }} 
      className="position-fixed top-0 start-0 w-100 h-100"
    >
      {/* Fundo escuro clicável para fechar o modal */}
      <div 
        className="bg-dark opacity-75 position-fixed top-0 start-0 w-100 h-100" 
        onClick={() => setModel(false)}
      ></div>

      {/* Caixa de conteúdo do modal */}
      <div className="position-fixed top-50 start-50 translate-middle p-5 bg-dark rounded-4 border border-secondary d-flex flex-column justify-content-center">
        <h3 className="text-danger mx-auto mb-4">Aviso Legal</h3>
        <p className="text-light justify">
          Projeto gratuito para fins de estudo e uso pessoal, sem fins lucrativos. Os textos bíblicos exibidos nessa página pertencem aos seus respectivos detentores de direitos autorais. <br/><br/> 
          Para remoção de conteúdo, entre em contato via <a href="mailto:danielfealmeida@gmail.com">danielfealmeida@gmail.com</a>.
        </p>
        <span 
          role="button" 
          className="position-absolute top-0 end-0 text-danger fs-3 border-none pointer pe-2" 
          onClick={() => setModel(false)}
        >
          ×
        </span>
      </div>
    </div>
  );
}