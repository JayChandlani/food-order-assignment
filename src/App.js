import { CssBaseline, ThemeProvider } from '@mui/material'
import Home from './Home'
import { themeSettings } from './theme'
import { createTheme } from "@mui/material/styles";
import About from './About';
import Articles from './Articles';
import Footer from './Footer';
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