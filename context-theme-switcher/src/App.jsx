import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme switcherBtn */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* card component */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
