import * as S from "./App.styled";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./routes";
// import { MainPage } from "./pages/main-page/main-page";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <GlobalStyles />
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
