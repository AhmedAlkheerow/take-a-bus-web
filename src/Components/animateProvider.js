import { useState, useEffect } from 'react';
export default function ChangingProgressProvider(props) {
  const defaultProps = {
    interval: 1000,
  };
  let [valuesIndex, setvaluesIndex] = useState(0);
  let [interval, setIntervalState] = useState(null);

  useEffect(() => {
    setIntervalState(
      setInterval(() => {
        setvaluesIndex(valuesIndex++ % props.values.length);
      }, defaultProps.interval)
    );
  }, []);

  if (valuesIndex == props.values.length - 1) {
    clearInterval(interval);
  }
  return props.children(props.values[valuesIndex]);
}
