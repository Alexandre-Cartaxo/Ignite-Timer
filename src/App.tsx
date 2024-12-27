import {ThemeProvider} from 'styled-components'
import { Button } from "./components/Buttom";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Button variant="primary"></Button>
      <Button variant="secundary"></Button>
      <Button variant="danger"></Button>
      <Button variant="success"></Button>

      <GlobalStyle />

    </ThemeProvider>
  )
}


