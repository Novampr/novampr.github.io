import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ScrollingImage from './ScrollingImage';
import './Sidebar.css';

import ingot from '../assets/icons/index/ingot.png';
import hoe from '../assets/icons/index/hoe.png';
import sword from '../assets/icons/index/sword.png';
import pickaxe from '../assets/icons/index/pickaxe.png';
import axe from '../assets/icons/index/axe.png';
import shovel from '../assets/icons/index/shovel.png';
import nugget from '../assets/icons/index/nugget.png';
import spear from '../assets/icons/index/spear.png';
import cake from '../assets/icons/index/cake.png';
const homeImages = [ingot, hoe, sword, pickaxe, axe, shovel, nugget, spear, cake];

import trans from '../assets/icons/about/ingot_trans.png';
import pan from '../assets/icons/about/ingot_pan.png';
const aboutImages = [trans, pan];

import tabbyChat from '../assets/projects/tabbychat.webp';
const projectImages = [tabbyChat];

// side bar images, yay yay
const pageImages: Record<string, string[]> = {
  '/': homeImages,
  '/about': aboutImages,
  '/software': projectImages,
};

// go go gadget preload images
const allImages = Array.from(new Set(Object.values(pageImages).flat()));
export const preloadedImages = allImages.map((src) => {
  const img = new Image();
  img.src = src;
  return img;
});

export interface NavItem {
  label: string;
  to: string;
}

export interface FooterLink {
  icon: string;
  href: string;
}

interface SidebarProps {
  title?: string;
  navItems?: NavItem[];
  headerExtra?: React.ReactNode;
  copyrightName?: string;
  footerLinks?: FooterLink[];
  footerExtra?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  title = 'Auri Net',
  navItems = [],
  headerExtra,
  copyrightName = 'AuriiU',
  footerLinks = [],
  footerExtra,
}) => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const images = pageImages[location.pathname] ?? homeImages;

  return (
    <aside className="site-sidebar">
      <div className="site-sidebar-background">
        <ScrollingImage images={images} />
      </div>
      <div className="site-sidebar-overlay" />

      <div className="site-sidebar-content">
        <div className="site-sidebar-top">
          <div className="site-sidebar-brand">{title}</div>

          <nav className="site-sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `site-sidebar-nav-item${isActive ? ' site-sidebar-nav-item-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {headerExtra && <div className="site-sidebar-extra">{headerExtra}</div>}
        </div>

        <div className="site-sidebar-bottom">
          {footerExtra && <div className="site-sidebar-extra">{footerExtra}</div>}

          {footerLinks.length > 0 && (
            <nav className="site-sidebar-nav site-sidebar-nav-bottom">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="site-sidebar-nav-item">
                  <img src={link.icon} width={24} height={24} />
                </a>
              ))}
            </nav>
          )}

          <p className="site-sidebar-copyright">
            &copy; {year} {copyrightName}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
