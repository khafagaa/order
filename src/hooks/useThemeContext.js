import {useColorScheme} from 'react-native';

const {createContext, useState} = require('react');

export const ThemeContext = createContext();
const UseThemeContext = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const [theme, setTheme] = useState(isDarkMode ? 'dark' : 'light');

  const changeTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// hosting
// ssl piling

export default UseThemeContext;
