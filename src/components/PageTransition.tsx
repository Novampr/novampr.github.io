import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const TRANSITION_MS = 100;

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [displayPathname, setDisplayPathname] = useState(location.pathname);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (location.pathname === displayPathname) {
      setVisible(true);
      return;
    }

    setVisible(false);

    timeoutRef.current = setTimeout(() => {
      setDisplayChildren(children);
      setDisplayPathname(location.pathname);
      setVisible(true);
    }, TRANSITION_MS);

    return () => clearTimeout(timeoutRef.current);
  }, [location.pathname, displayPathname, children]);

  return (
    <div className={`page-transition${visible ? ' page-transition--visible' : ''}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
