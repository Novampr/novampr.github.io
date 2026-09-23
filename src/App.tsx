import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import './App.css';

import discordLogo from './assets/brands/discord.png';
import youtubeLogo from './assets/brands/youtube.png';

const headerNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Software', to: '/software' },
];

const footerLinks = [
  { icon: 'https://github.githubassets.com/favicons/favicon-dark.png', href: 'https://github.com' },
  { icon: discordLogo, href: 'https://discord.gg/hadcHUfaSk' },
  { icon: youtubeLogo, href: 'https://www.youtube.com/@auriiu' },
];

function AppContent() {
  const routeElement = useRoutes(routes);

  return (
    <Layout headerNavItems={headerNavItems} footerLinks={footerLinks}>
      <PageTransition>{routeElement}</PageTransition>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
