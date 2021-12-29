import cookie from 'cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const TREELAB_AUTH = publicRuntimeConfig.NEXT_PUBLIC_TREELAB_AUTH_TOKEN;

export const setCookie = (cookieName: string, cookieValue: string, days: number) => {
  if (!process.browser) return;
  document.cookie = cookie.serialize(cookieName, cookieValue, {
    maxAge: days * 24 * 60 * 60,
    path: '/',
    domain: publicRuntimeConfig.NEXT_PUBLIC_DOMAIN,
  });
};

export const setToken = (token: string) => {
  setCookie(TREELAB_AUTH, token, 365);
};

export const getToken = () => {
  return cookie.parse(document.cookie)[TREELAB_AUTH];
};
