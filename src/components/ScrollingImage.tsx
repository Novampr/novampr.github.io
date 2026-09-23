import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ScrollingImage.css';

const TRANSITION_MS = 100;

interface ScrollingImageProps {
  images: string[];
}

const buildSequence = (images: string[], tileCount: number): string[] => {
  const result: string[] = [];

  for (let i = 0; i < tileCount; i++) {
    const isLast = i === tileCount - 1;
    const forbidden = new Set<string>();
    if (i > 0) forbidden.add(result[i - 1]);
    if (isLast && tileCount > 1) forbidden.add(result[0]);

    const candidates = images.filter((img) => !forbidden.has(img));
    const pool = candidates.length > 0 ? candidates : images;
    result.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  return result;
};

const ScrollingImage: React.FC<ScrollingImageProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tileCount, setTileCount] = useState(8);
  const [displayImages, setDisplayImages] = useState(images);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateTileCount = () => {
      const width = el.clientWidth || 1;
      const height = el.clientHeight || 0;
      setTileCount(Math.max(1, Math.ceil(height / width)) + 1);
    };

    updateTileCount();

    const observer = new ResizeObserver(updateTileCount);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (images === displayImages) {
      setVisible(true);
      return;
    }

    setVisible(false);

    timeoutRef.current = setTimeout(() => {
      setDisplayImages(images);
      setVisible(true);
    }, TRANSITION_MS);

    return () => clearTimeout(timeoutRef.current);
  }, [images, displayImages]);

  const sequence = useMemo(
    () => buildSequence(displayImages, tileCount),
    [displayImages, tileCount]
  );

  return (
    <div className="scrolling-image" ref={containerRef}>
      <div className={`scrolling-image-fade${visible ? ' scrolling-image-fade--visible' : ''}`}>
        <div className="scrolling-image-track">
          {[...sequence, ...sequence].map((src, index) => (
            <img key={index} src={src} alt="" className="scrolling-image-tile" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImage;
