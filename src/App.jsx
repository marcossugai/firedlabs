import ButtonFired from './components/ButtonFired';
import FooterFired from './components/FooterFired';
import HeaderFired from './components/HeaderFired';
import LinkFired from './components/LinkFired';
import LogoStyled from './components/LogoStyled';
import HighlightFired from './components/HighlightFired';

function App() {
  return (
    <>
      <HeaderFired>
        <LogoStyled />

        <ButtonFired>Novo vídeo</ButtonFired>
      </HeaderFired>

      <FooterFired>
        <LogoStyled />
        <p>Site feito na <HighlightFired>#ImersãoReact</HighlightFired> da <LinkFired href='https://www.alura.com.br'>Alura</LinkFired>
        </p>
      </FooterFired>
    </>
  );
}

export default App;
