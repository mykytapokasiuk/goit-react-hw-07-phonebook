import { Notify } from 'notiflix';

/**
 * Shows a message in case of an error
 *@function onError
 * @param {string} error
 */
export const onError = error => {
  Notify.failure(`Please, try again later. Error: ${error}`, {
    width: '280px',
    showOnlyTheLastOne: true,
    position: 'center-center',
    timeout: 3000,
    fontSize: '15px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
};
/**
 * Shows a message if the name is already in contacts
 *@function onSameName
 * @param {string} name
 */
export const onSameName = name => {
  Notify.warning(`${name} is already in contacts!`, {
    width: '280px',
    showOnlyTheLastOne: true,
    position: 'center-center',
    timeout: 3000,
    fontSize: '15px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
};
