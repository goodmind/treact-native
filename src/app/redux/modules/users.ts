import { createReducer } from 'redux-act';

import { CHATS } from 'actions';
import { IStoreList } from 'helpers/state';
import { IMtpUser } from '../mtproto';

import { updateStoreMap, modelDefaults } from 'helpers/reselector';

export type IStoreUsers = IStoreList<IMtpUser>;

const { LOAD_SLICE, GET_DIALOGS } = CHATS;

const updater = updateStoreMap('users');

const newReducer = createReducer({
  [LOAD_SLICE.DONE]: updater,
  [GET_DIALOGS.DONE]: updater,
}, modelDefaults);

export default newReducer;
