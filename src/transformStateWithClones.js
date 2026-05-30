'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const addValues = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        currentState = {
          ...currentState,
          ...action.extraData,
        };

        addValues.push(currentState);
        break;

      case 'removeProperties':
        currentState = { ...currentState };

        for (const key of action.keysToRemove) {
          delete currentState[key];
        }

        addValues.push(currentState);
        break;

      case 'clear':
        addValues.push({});
        break;
    }
  }

  return addValues;
}

module.exports = transformStateWithClones;
