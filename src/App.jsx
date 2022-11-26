import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Container } from "./components/common/Container/Container";
import { ROUTE_LIST } from "./module/route/route";
import { Routes, Route } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

// 분리해야할 모듈, App.jsx 에사 쓸 것이 아니라, 인풋에서 써야함.

function App() {
  return (
    <Container className="container">
      <GlobalStyle />
      <Routes>
        {ROUTE_LIST.map((val) => (
          <Route key={val.path} path={val.path} element={val.element} />
        ))}
      </Routes>
    </Container>
  );
}

export default App;
