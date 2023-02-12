import { CssBaseline, ThemeProvider } from '@mui/material'
import Home from './views/Home'
import { themeSettings } from './theme'
import { createTheme } from "@mui/material/styles";
import About from './views/About';
import Articles from './views/Articles';
import Footer from './views/Footer';
const App = () => {
  const theme = createTheme(themeSettings())
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
        <About />
        <Articles />
        <Footer />
      </ThemeProvider>
    </>
  )
}
export default App