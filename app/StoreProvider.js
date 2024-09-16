// 'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Call the store function to get the store instance
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
