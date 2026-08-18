import React, { forwardRef } from 'react';
import { useBibleStore } from '../store/bibleStore';

const BibleColumn = forwardRef(function BibleColumn(
  { book, chapter, defaultVersion, theme, style, onScroll },
  ref
) {
  const store = useBibleStore();
  const versionData = store[defaultVersion] || [];
  const currentBook = versionData[book] || { name: '', chapters: [] };
  const currentChapterVerses = currentBook.chapters[chapter] || [];

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={`bible-column ${theme} border rounded p-3`}
      style={style}
    >
      <div className="bible-column-header text-center mb-3">
        <span className="badge bg-primary text-uppercase px-3 py-1 fs-6">
          {defaultVersion}
        </span>
      </div>

      <div className="bible-verses-container">
        {currentChapterVerses.map((verseText, index) => (
          <p key={index} className="verse-item">
            <span className="verse-number">{index + 1}</span>
            <span className={`verse-text ${theme}`}>{verseText}</span>
          </p>
        ))}
      </div>
    </div>
  );
});

export default BibleColumn;