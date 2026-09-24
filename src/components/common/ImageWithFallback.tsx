import React, { useState, forwardRef } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackBg?: string;
}

const DEFAULT_FALLBACK = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg==';

export const ImageWithFallback = forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  ({ fallbackSrc = DEFAULT_FALLBACK, fallbackBg = 'var(--color-bg-sand)', src, className = '', style, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleError = () => {
      if (!hasError) {
        setHasError(true);
        setImgSrc(fallbackSrc);
      }
    };

    const handleLoad = () => {
      setIsLoaded(true);
    };

    return (
      <img
        ref={ref}
        src={imgSrc}
        className={`${className} ${isLoaded ? 'loaded' : ''}`}
        style={{
          ...style,
          backgroundColor: hasError ? fallbackBg : 'transparent',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity var(--transition-base, 0.35s) ease',
        }}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    );
  }
);

ImageWithFallback.displayName = 'ImageWithFallback';
