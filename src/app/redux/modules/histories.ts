import { createReducer } from 'redux-act';
import { IStoreList } from 'helpers/state';
import { CHATS } from 'actions';

import { updateStoreList, modelDefaults } from 'helpers/reselector';

const { LOAD_SLICE, GET_DIALOGS } = CHATS;

export type IStoreHistory = number[];

export type IStoreHistories = IStoreList<IStoreHistory>;

const updater = updateStoreList('histories');

const newReducer = createReducer({
  [LOAD_SLICE.DONE]: updater,
  [GET_DIALOGS.DONE]: updater,
}, modelDefaults);

export default newReducer;
