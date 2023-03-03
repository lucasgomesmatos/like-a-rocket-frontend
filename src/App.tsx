import { ThemeProvider } from 'styled-components';
import { Header } from './shared/components/Header';
import { About } from './shared/pages/About';
import { Clients } from './shared/pages/Clients';
import { Footer } from './shared/pages/Footer';
import { Home } from './shared/pages/Home';
import { Main } from './shared/pages/Main';
import { Service } from './shared/pages/Service';
import { defaultTheme } from './shared/styles/theme/default';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Home />
        <Main />
        <About />
        <Service />
        <Clients />
        <Footer />
      </ThemeProvider>
    </>
  );
};
