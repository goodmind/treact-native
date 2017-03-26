import * as React from 'react';
import { Image } from 'react-native';

import picStore from 'helpers/FileManager/picStore';

const defPhoto = require('./usercolor1.png');

interface IProps {
  id?: number | 'default';
  style?: object;
}

export const PeerPhotoEmpty = ({ style }: IProps) =>
  <Image
    style={style}
    source={defPhoto} />;

export const PeerPhoto = ({ id, style }: IProps) =>
  <Image
    style={style}
    source={picStore.get(id)} />;
// NOTE Sending blob through props is definitely slower
