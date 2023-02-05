import { Round } from '../../components/Round';
import { TypeWriterText } from '../../components/TypeWriterText';
import * as C from './style';

export const Home = () => {
  return (
    <C.Section>
      <C.Container>
        <C.Box>
          <TypeWriterText />
        </C.Box>
        <C.Box>
          <Round />
        </C.Box>
      </C.Container>
    </C.Section>
  );
};
