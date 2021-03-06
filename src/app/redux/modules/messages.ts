import { createReducer } from 'redux-act';

import { CHATS, MESSAGES } from 'actions';
const { GET_DIALOGS, LOAD_SLICE } = CHATS;
const { SEND_TEXT } = MESSAGES;

import { updateStoreMap, modelDefaults } from 'helpers/reselector';

const updater = updateStoreMap('messages');

const reducer = createReducer({
  [SEND_TEXT.DONE]: updater,
  [LOAD_SLICE.DONE]: updater,
  [GET_DIALOGS.DONE]: updater,
}, modelDefaults);

export default reducer;
