import { ThemeProvider } from 'styled-components';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { About } from './shared/pages/About';
import { Faq } from './shared/pages/Faq';
import { Home } from './shared/pages/Home';
import { Main } from './shared/pages/Main';
import { Service } from './shared/pages/Service';
import { dark } from './shared/styles/Themes';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Header />
        <Home />
        <Main />
        <About />
        <Service />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
};
