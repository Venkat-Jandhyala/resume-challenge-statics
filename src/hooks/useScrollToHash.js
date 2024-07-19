import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const removeHashCharacter = (str) => 
  str.charAt(0) === '#' ? str.slice(1) : str;

export const useScrollToHash = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        // console.log(`scrollIntoView ${hash} behavior: ${behavior}, inline: ${inline}, block: ${block}`);
        element.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
    }
  }, [hash]);
}