import MainLayout from './Components/Layout/MainLayout';
import AppRoutes from './Routes';
import { ThemeProvider } from './Contexts/ThemeContext';
import { AppStoreProvider } from './Contexts/AppStoreContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppStoreProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AppStoreProvider>
    </ThemeProvider>
  );

}

export default App;
