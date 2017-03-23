import * as React from 'react';
import { View } from 'react-native';
import { IStepNext } from 'containers/Login';
const t = require('../../style.js');

type IProps = Pick<IStepNext, 'nextStep'>;

const Intro = ({ nextStep }: IProps) => {
  return (
    <View style={t.loginStep}>
      <img
        width={102}
        height={102}
        src={require('./icon102.png')} />
      <h1>Telegram Desktop</h1>
      <p>
        Welcome to the official <a href="https://telegram.org">Telegram</a> desktop app.
      </p>
      <p>
        It's <strong>fast</strong> and <strong>secure</strong>.
      </p>
      <button onClick={nextStep} style={[t.btn, t.primary]}>Start messaging</button>
    </View>
  );
};

export { Intro }
