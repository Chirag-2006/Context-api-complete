import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemMode] = useState("light");

  console.log("themeMode:", themeMode);

  function lightTheme() {
    setThemMode("light");
  }
  function darkTheme() {
    setThemMode("dark");
  }

  // actual theme kese change hoti hai?
  useEffect(() => {
    // function changeTheme() {
    let classList = document.querySelector("html").classList;
    classList.remove("dark", "light");
    classList.add(themeMode);
    console.log(classList);
    // }
    // changeTheme();
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme switcherBtn */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
