import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from 'redux/IStore';
import { pathOr } from 'ramda';
import { PeerPhotoEmpty, PeerPhoto } from 'components/PeerPhoto';
import picStore from 'helpers/FileManager/picStore';
// import * as classNames from 'classnames';
import { FileStatus } from 'redux/modules/files';

interface IConnectedState {
  photoId: number | 'default';
}

interface IOwnProps {
  peerID: number;
  withPhoto?: boolean;
  style?: object;
}

type IProps = IConnectedState & IOwnProps;

const PeerPhotoContainer = ({ photoId, style = {} }: IProps) => {
  // const css = classNames('avatar', className);
  return picStore.has(photoId)
    ? <PeerPhoto id={photoId} style={style} />
    : <PeerPhotoEmpty style={style} />;
};


const photoFromState = (state: IStore, peerID: number): number | 'default' => pathOr('default',
  ['photos', 'byId', peerID, 'photo_small'])(state);

const fileStatus = (state: IStore, photoId: number ): FileStatus =>
  pathOr('idle', ['files', 'status', photoId])(state);

const getPhotoId = (state: IStore, peerID: number) => {
  const id = photoFromState(state, peerID);
  if (id === 'default') return id;
  const status = fileStatus(state, id);
  return status === 'cached'
    ? id
    : 'default';
};

const propsState = (state: IStore, { peerID }: IOwnProps) => ({
  photoId: getPhotoId(state, peerID),
});

const connected = connect<IConnectedState, {}, IOwnProps>(propsState)(PeerPhotoContainer);

export { connected as PeerPhoto }
