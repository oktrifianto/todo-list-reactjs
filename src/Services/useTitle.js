import { useRef, useEffect } from 'react'

export default function useTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
      
    }
    // eslint-disable-next-line
  }, []); // https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
  
}
