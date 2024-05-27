import { Todo } from './types';

const getUserFolder = async () => {
  return './';
};

const getAppFolder = (homedir: string) => {
  return `${homedir}/.tddoapp`;
};

export const setupAppFolder = async () => {
  const userFolder = await getUserFolder();
  const appFolder = getAppFolder(userFolder);
  if (userFolder) {
    // if appFolder doesn't exist, create it
    console.log(appFolder);
  }

  return '';
};

const getItemsFilePath = (appFolder: string) => `${appFolder}/items.json`;
const getItemsBackupPath = (appFolder: string) => `${appFolder}/items.json.bk`;

export const saveItems = async (
  list: Todo[],
  appFolder: string,
): Promise<void> => {
  console.log('Preparing to save items');
  if (appFolder) {
    console.log('appFolder is set up', appFolder);
    const itemsFilePath = getItemsFilePath(appFolder);
    const itemsBackupPath = getItemsBackupPath(appFolder);
    // if save file exists, save backup
    console.log(itemsBackupPath);

    console.log('Saving items up', itemsFilePath);
    // save file
  }
  console.log(list);
};

export const loadItems = async (appFolder: string): Promise<Todo[]> => {
  const itemsFilePath = getItemsFilePath(appFolder);
  console.log(itemsFilePath);
  // if save file exists, load it

  return [];
};
