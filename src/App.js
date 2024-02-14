import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useTheme } from './context/theme-context';
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import styles from './App.module.css';

function App() {
  const { theme } = useTheme();

  return (
    <Box className={styles.app}>
      <Box className="main"
        sx={{
          width:{
            md: '430px',
          }
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>        
      </Box>
    </Box>
  );
}

export default App;
