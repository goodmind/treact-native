import * as React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Button } from 'components/Login/Button';
import { Strong } from 'components';

const t = require('../style');

const AuthCode = ({ form, error, nextStep, change }) => (
  <View style={t.loginStep}>
    <Text>{form.phoneNumber}</Text>
    <Text>
      Please enter the code you've just received in the previous <Strong>Telegram</Strong> app.
    </Text>
    <View
      // style={`row center-xs ${t.formGroupLogin}`}
      style={t.formGroupLogin}>
      <TextInput
        style={{height: 40}}
        onChange={change}
        key="authCode"
        // style="col-xs-4 form-control form-control-lg"
        placeholder="Your code" maxLength={5} />
    </View>
    {error && <Text>Error type: {error.description}</Text>}
    <Button
      title="Next"
      onPress={nextStep} />
  </View>
);

export { AuthCode }
