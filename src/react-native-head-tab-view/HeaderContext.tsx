import React from 'react';
import type { IHeaderContext } from './types';
export const HeaderContext = React.createContext<IHeaderContext | undefined>(
  undefined
);
