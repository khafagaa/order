import {RefObject, createRef} from 'react';
import {AppLoaderRefType} from './index';

export const AppLoaderRef = createRef<AppLoaderRefType>();

export const ShowLoader = ({toggle = false}: {toggle: boolean}) => {
  setRef(AppLoaderRef, toggle);
};

const setRef = (ref: RefObject<AppLoaderRefType>, value: boolean) => {
  if (ref.current) {
    ref.current.loading = value;
    ref.current.toggle(value);
  }
  console.log(`check here ${ref.current?.loading}`);
};
