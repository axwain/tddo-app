import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge, ipcRenderer } from 'electron';
import type { Todo } from '../shared/types';

// Custom APIs for renderer
const api = {
  close: () => {
    ipcRenderer.send('close');
  },
  loadItems: (): Promise<Todo[]> => {
    return ipcRenderer.invoke('load-items');
  },
  saveItems: (items: Todo[]) => {
    ipcRenderer.send('save-items', items);
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
