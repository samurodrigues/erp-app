import styled  from "styled-components";
import './style.css';

const Tela = styled.section`
  min-height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return(
    <Tela>
      <h1>Home</h1>
    </Tela>
  )
}