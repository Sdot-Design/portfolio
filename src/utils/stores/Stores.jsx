import { createContext } from 'react';
import UIStore from './UIStore';

const uiStore = new UIStore();

export default createContext({
    uiStore,
});