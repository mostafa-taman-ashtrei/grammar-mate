import TextPage from "./pages/TextPage";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TextPage />
    </ThemeProvider>
  );
};

export default App;
