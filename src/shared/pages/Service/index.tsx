import * as C from './style';

export const Service = () => {
  return (
    <C.Section>
      <C.Title>Serviços</C.Title>
      <C.Row direction="none">
        <C.Item>Automações</C.Item>
      </C.Row>
      <C.Row direction="reverse">
        <C.Item>Implantação de e-commerce</C.Item>
      </C.Row>
      <C.Row direction="none">
        <C.Item>Otimização de sites (SEO)</C.Item>
      </C.Row>
      <C.Row direction="reverse">
        <C.Item>Gestão de Tráfego</C.Item>
      </C.Row>
    </C.Section>
  );
};
