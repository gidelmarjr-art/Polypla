import React from 'react';
import { useReveal } from '../hooks/usereveal';

/**
 * Envolve qualquer bloco de conteúdo e aplica um fade-in + leve
 * deslocamento vertical quando o elemento entra na tela.
 *
 * Uso:
 *   <Reveal delay={100}><h1>Título</h1></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  style = {},
}) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}