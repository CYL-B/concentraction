/** Unused 11/05/24 */
//matchMedia est une méthode applicable à window et qui récupère un objet MediaQueryList avec le statut du viewport, si l'objet match l'argument query alors return true.
//matches() est une méthode applicable à l'élément et qui returns true si l'élément à laquelle elle est appliquée correspond

//useMediaQuery(mediaQueriesSizes.md) vérifie si le viewport est inférieur à mediaQueriesSizes.md (768px). Si oui, returns navBarMobile sinon, navBarDesktop
import { mediaQueriesSizes } from "../constants/mediaQueries";
import { useState, useEffect } from "react";

export function useMediaQuery(screen) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${mediaQueriesSizes[screen]})`;
    
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
}
