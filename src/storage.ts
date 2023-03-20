import { filesystem, os } from '@neutralinojs/lib';
import { Todo } from './types';

const getUserFolder = async () => {
  return (await os.getEnv('userprofile')) || (await os.getEnv('HOME')) || '';
};

const getAppFolder = (homedir: string) => {
  return `${homedir}/.tddoapp`;
};

export const setupAppFolder = async () => {
  const userFolder = await getUserFolder();
  const appFolder = getAppFolder(userFolder);
  if (userFolder) {
    try {
      console.log('finding app folder', appFolder);
      await filesystem.readDirectory(appFolder);
      console.log('return app folder', appFolder);
      return appFolder;
    } catch (e) {
      if (e.code === 'NE_FS_NOPATHE') {
        console.log('creating', appFolder);
        await filesystem.createDirectory(appFolder);
        console.log('return app folder', appFolder);
        return appFolder;
      }
    }
  }

  console.log('no app folder out');
  return '';
};

const getItemsFilePath = (appFolder: string) => `${appFolder}/items.json`;
const getItemsBackupPath = (appFolder: string) => `${appFolder}/items.json.bk`;

const itemsFileExist = async (itemsPath: string) => {
  try {
    await filesystem.readDirectory(itemsPath);
    return true;
  } catch (e) {
    return false;
  }
};

export const saveItems = async (
  list: Todo[],
  appFolder: string
): Promise<void> => {
  console.log('Preparing to save items');
  if (appFolder) {
    console.log('appFolder is set up', appFolder);
    const itemsFilePath = getItemsFilePath(appFolder);
    const itemsBackupPath = getItemsBackupPath(appFolder);
    if (await itemsFileExist(itemsFilePath)) {
      console.log('Backing up items', itemsBackupPath);
      await filesystem.copyFile(itemsFilePath, itemsBackupPath);
    }

    console.log('Saving items up', itemsFilePath);
    await filesystem.writeFile(itemsFilePath, JSON.stringify(list, null, 2));
  }
};

export const loadItems = async (appFolder: string): Promise<Todo[]> => {
  const itemsFilePath = getItemsFilePath(appFolder);
  if (await itemsFileExist(itemsFilePath)) {
    const itemsRawData = await filesystem.readFile(itemsFilePath);
    return JSON.parse(itemsRawData);
  }

  return [];
};
