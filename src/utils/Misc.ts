import { appName } from "@/constants";
import { INotSure } from "@/types";

/**
 * @function capitalizeWord
 * @author traj3ctory
 * @param {string} word
 * @return {string}
 */

export const capitalizeWord = (word: string): string => {
  if (typeof word !== "string") {
    return "";
  }

  const words = word.split(" ");
  const capitalizedWords = words.map(
    (w) => w.charAt(0).toUpperCase() + w.slice(1)
  );

  return capitalizedWords.join(" ");
};
// ============================================

/**
 * @function getPageTitle
 * @param {string} title
 * @returns {string}
 */
export const getPageTitle = (title: string = appName): string => {
  const _userData = "BZD";
  const userData = _userData ? JSON.parse(_userData) : null;
  const _user = userData ? userData?.username?.split("@")[0] : null;
  // capitalize user
  const user = capitalizeWord(_user);
  return user
    ? `${user}'s ${title} page`
    : title
    ? `${title} | ${appName}`
    : appName;
};
// ============================================

/**
 * @function mergeClassNames
 * @param {string} name
 * @returns {string}
 */

export const mergeClassNames = (
  ...classes: (string | [boolean, string])[]
): string => {
  return classes
    .map((cls) => {
      if (Array.isArray(cls)) {
        const [condition, className] = cls;
        return condition ? className : "";
      }
      return cls;
    })
    .filter(Boolean)
    .join(" ");
};

/**
 * @function isStr
 * @param {string | string[]} value
 */
export const isStr = (value: string | string[]): value is string => {
  return typeof value === "string";
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: INotSure[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const maxWords = (str: string, max = 15): string => {
  const words = str.split(" ");
  if (words.length > max) {
    return `${words.slice(0, max).join(" ")}...`;
  }
  return str;
};
