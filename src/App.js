import { AppShell, createStyles } from '@mantine/core';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';
import Schools from './pages/schools/Schools';

const useStyles = createStyles((theme) => ({
  main: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    minHeight: 0,
    maxWidth: 1400,
    margin: '0 auto',
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <AppShell header={<Header />} padding="lg" classNames={classes}>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="schools" element={<Schools />}></Route>
      </Routes>
    </AppShell>
  );
}

export default App;
