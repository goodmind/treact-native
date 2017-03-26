import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Strong } from 'components';
import { IStepNext } from 'containers/Login';
import { Button } from 'components/Login/Button';
const t = require('../../style');

type IProps = Pick<IStepNext, 'nextStep'>;

const Intro = ({ nextStep }: IProps) => {
  return (
    <View style={t.loginStep}>
      <Image
        style={{width: 102, height: 102}}
        source={require('./icon102.png')} />
      <Text>Telegram Desktop</Text>
      <Text>
        Welcome to the official Telegram desktop app.
      </Text>
      <Text>
        It's <Strong>fast</Strong> and <Strong>secure</Strong>.
      </Text>
      <Button
        title="Start messaging"
        onPress={nextStep} />
    </View>
  );
};

export { Intro }
