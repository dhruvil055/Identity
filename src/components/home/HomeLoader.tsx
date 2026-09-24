import React from 'react';
import { BRAND_CONFIG } from '../../data/brandData';
import './HomeLoader.css';

interface HomeLoaderProps {
  done: boolean;
}

/**
 * Premium homepage loading overlay — logo reveal + thin gold progress line.
 * Overlay-only: content renders underneath and is never blocked.
 * Parent controls timing (min 500ms, max ~1200ms, skipped fast when cached).
 */
export const HomeLoader: React.FC<HomeLoaderProps> = ({ done }) => {
  return (
    <div
      className={`home-loader${done ? ' is-done' : ''}`}
      role="status"
      aria-label="Loading homepage"
      aria-hidden={done}
    >
      <div className="home-loader-inner">
        <div className="home-loader-word" aria-hidden="true">
          I-DENTY
        </div>
        <div className="home-loader-line" aria-hidden="true" />
        <div className="home-loader-tag">{BRAND_CONFIG.tagline}</div>
      </div>
    </div>
  );
};
