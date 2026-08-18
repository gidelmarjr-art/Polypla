import React from 'react';
import './HeroHome.css';
import Reveal from './Reveal';

export function HeroHome() {
  return (
    <div className="hero-container bg-dark">
      <div className="hero-content">
        <Reveal delay={0}>
          <span className="hero-subtitle">ESTUDO BÍBLICO COMPARATIVO</span>
          <h1 className="hero-title">POLYPLA</h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="hero-description">
            Aplicação web criada para elevar a qualidade do estudo bíblico através da
            leitura paralela e comparativa de quatro traduções distintas em uma única
            interface.
          </p>
        </Reveal>

        <Reveal delay={220} className="versions-section">
          <p className="versions-label">Versões atualmente disponíveis:</p>
          <div className="version-tags">
            <span className="tag">ARA</span>
            <span className="tag">ARC</span>
            <span className="tag">NVI</span>
            <span className="tag">NAA</span>
          </div>
        </Reveal>

        <Reveal delay={320} className="legal-card border-secondary">
          <h3>⚠️ Aviso Legal</h3>
          <p>
            Este é um projeto de código aberto desenvolvido exclusivamente para fins de
            estudo pessoal e acadêmico, sem qualquer tipo de comercialização, exibição
            de anúncios ou fins lucrativos.

            Para remoção de conteúdo, entre em contato via danielfealmeida@gmail.com.
          </p>
          <p className="legal-small">
            Os direitos autorais de todas as edições e traduções bíblicas pertencem às
            suas respectivas editoras.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
