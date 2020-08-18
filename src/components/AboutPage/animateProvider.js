import { useState, useEffect, useRef } from 'react';
export default function ChangingProgressProvider(props) {
  let [valuesIndex, setvaluesIndex] = useState(0);

  const clear = useInterval(() => {
    setvaluesIndex(valuesIndex++ % props.values.length);
  }, 300);

  if (valuesIndex === props.values.length - 1) clear();

  return props.children(props.values[valuesIndex]);
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  const id = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args);

    if (delay !== null) {
      id.current = setInterval(handler, delay);
      return () => clearInterval(id.current);
    }
  }, [delay]);

  return () => clearInterval(id.current);
};
