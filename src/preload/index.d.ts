import { ElectronAPI } from '@electron-toolkit/preload';
import type { Todo } from 'src/shared/types';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      close: () => void;
      loadItems: () => Promise<Todo[]>;
      saveItems: (items: Todo[]) => void;
    };
  }
}
