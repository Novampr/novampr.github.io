import React from 'react';
import Sidebar, { NavItem, FooterLink } from './Sidebar';
import './Layout.css';

interface LayoutProps {
  children?: React.ReactNode;
  headerTitle?: string;
  headerNavItems?: NavItem[];
  headerExtra?: React.ReactNode;
  footerCopyrightName?: string;
  footerLinks?: FooterLink[];
  footerExtra?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerTitle,
  headerNavItems,
  headerExtra,
  footerCopyrightName,
  footerLinks,
  footerExtra,
}) => {
  return (
    <div className="site-layout">
      <Sidebar
        title={headerTitle}
        navItems={headerNavItems}
        headerExtra={headerExtra}
        copyrightName={footerCopyrightName}
        footerLinks={footerLinks}
        footerExtra={footerExtra}
      />

      <main className="site-main">{children}</main>
    </div>
  );
};

export default Layout;
