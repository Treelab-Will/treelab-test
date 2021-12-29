import { en as pandaEn, zh as pandaZh } from '@treelab/panda';
import enMessages from '../locales/en.json';
import zhMessages from '../locales/zh.json';

export const localeMessages: { [key: string]: Record<string, string> } = {
  en: { ...pandaEn, ...enMessages },
  zh: { ...pandaZh, ...zhMessages },
};
