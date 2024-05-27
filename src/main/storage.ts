import {
  constants,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { homedir } from 'os';
import type { Todo } from '../shared/types';

const getAppFolder = (homedir: string) => {
  return `${homedir}/.tddoapp`;
};

export const setupAppFolder = () => {
  const userFolder = homedir();
  const appFolder = getAppFolder(userFolder);
  if (!existsSync(appFolder)) {
    mkdirSync(appFolder, { recursive: true });
  }

  return appFolder;
};

const getItemsFilePath = (appFolder: string) => `${appFolder}/items.json`;
const getItemsBackupPath = (appFolder: string) => `${appFolder}/items.json.bk`;

export const saveItems = (list: Todo[], appFolder: string) => {
  console.log('Preparing to save items');
  if (appFolder) {
    console.log('appFolder is set up', appFolder);
    const itemsFilePath = getItemsFilePath(appFolder);
    const itemsBackupPath = getItemsBackupPath(appFolder);
    if (existsSync(itemsFilePath)) {
      copyFileSync(itemsFilePath, itemsBackupPath, constants.COPYFILE_FICLONE);
    }

    console.log('Saving items up', itemsFilePath);
    writeFileSync(itemsFilePath, `${JSON.stringify(list, null, 2)}\n`);
  }
};

export const loadItems = (appFolder: string): Todo[] => {
  const itemsFilePath = getItemsFilePath(appFolder);
  if (existsSync(itemsFilePath)) {
    const contents = readFileSync(itemsFilePath, { encoding: 'utf-8' });
    return JSON.parse(contents) as Todo[];
  }

  return [];
};
