import {
    createContext, useContext, useState, useEffect
  } from "react";

  const SettingsContext = createContext();

  export function SettingsProvider({
    children,
  }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleBurgerMenu = () => {
      setIsOpen(!isOpen)
    }

    const [openFilter, setOpenFilter] = useState(false);

    const toggleFilterMenu = () => {
      setOpenFilter(!openFilter)
    }

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
      setIsOpen(false);
    };
  
    const [isDarkMode, setIsDarkMode] = useState(false);
  const [isKingSize, setIsKingSize] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--white', '#fff200');
      document.documentElement.style.setProperty('--background-color', '#1a1a1a');
      document.documentElement.style.setProperty('--title-color', '#EBF2FA');
      document.documentElement.style.setProperty('--primary-color', '#1a1a1a');
      document.documentElement.style.setProperty('--secondary-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#fff200');
      document.documentElement.style.setProperty('--btn-one', '#fff200');
      document.documentElement.style.setProperty('--btn-one-hover', '#bdb300');
      document.documentElement.style.setProperty('--btn-one-active', '#fff200');
      document.documentElement.style.setProperty('--btn-two', '#fff200');
      document.documentElement.style.setProperty('--btn-two-hover', '#bdb300');
      document.documentElement.style.setProperty('--btn-two-active', '#fff200');
      document.documentElement.style.setProperty('--btn-three', '#fff200');
      document.documentElement.style.setProperty('--btn-three-hover', '#bdb300');
      document.documentElement.style.setProperty('--btn-three-active', '#fff200');
    } else {
      document.documentElement.style.setProperty('--white', '#fcfcfc');
      document.documentElement.style.setProperty('--background-color', '#f8f8f8');
      document.documentElement.style.setProperty('--title-color', '#1a1616');
      document.documentElement.style.setProperty('--primary-color', '#427AA1');
      document.documentElement.style.setProperty('--secondary-color', '#22333B');
      document.documentElement.style.setProperty('--text-color', '#1a1616');
      document.documentElement.style.setProperty('--btn-one', '#427AA1');
      document.documentElement.style.setProperty('--btn-one-hover', '#234258');
      document.documentElement.style.setProperty('--btn-one-active', '#427ba4');
      document.documentElement.style.setProperty('--btn-two', '#679436');
      document.documentElement.style.setProperty('--btn-two-hover', '#374f1d');
      document.documentElement.style.setProperty('--btn-two-active', '#679436');
      document.documentElement.style.setProperty('--btn-three', '#22333B');
      document.documentElement.style.setProperty('--btn-three-hover', '#070b0c');
      document.documentElement.style.setProperty('--btn-three-active', '#2e4550');
    }

    if (isKingSize) {
      document.documentElement.style.setProperty('--size', '18px');
    } else {
      document.documentElement.style.setProperty('--size', '14px');
    }
  }, [isDarkMode, isKingSize]);

  const hangleToggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const hangleToggleSize = () => {
    setIsKingSize(prevMode => !prevMode)
  }

      return (
          <SettingsContext.Provider value={{ hangleToggleTheme, hangleToggleSize, toggleBurgerMenu, isOpen, isDarkMode, openFilter, toggleFilterMenu, isPopupVisible, togglePopup  }}>
              {children}
          </SettingsContext.Provider>
      )
  }
  // J'exporte mon hook personnalisé
  export const useSettings =
    () => useContext(SettingsContext);