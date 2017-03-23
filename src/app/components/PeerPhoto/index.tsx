import * as React from 'react';

import picStore from 'helpers/FileManager/picStore';

const defPhoto = require('./usercolor1.png');

interface IProps {
  id?: number | 'default';
  style?: object;
}

export const PeerPhotoEmpty = ({ style }: IProps) =>
  <img
    style={style}
    src={defPhoto} />;

export const PeerPhoto = ({ id, style }: IProps) =>
  <img
    style={style}
    src={picStore.get(id)} />;
// NOTE Sending blob through props is definitely slower
