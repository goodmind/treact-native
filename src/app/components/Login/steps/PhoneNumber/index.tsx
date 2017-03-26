import * as React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Button } from 'components/Login/Button';

// const s = require('./style');
const t = require('../../style');

const PhoneNumber = ({ error, nextStep, change /*, phoneCode*/ }: any) => (
  <View style={t.loginStep}>
    <Text>Your Phone</Text>
    <Text>
      Please confirm your country code and enter your phone number.
    </Text>
    <View
      // style={`row ${t.formGroupLogin}`}
      style={t.formGroupLogin}>
      {/*<TextInput
        onChange={change}
        key="phoneCode"
        style={s.phoneCode}
        // style={`${s.phoneCode} col-xs-2 form-control form-control-lg`}
        defaultValue={phoneCode} />*/}
      <TextInput
        style={{height: 40}}
        onChange={change}
        key="phoneNumber"
        // style="col-xs-10 form-control form-control-lg"
        placeholder="--- --- -- --" />
    </View>
    {error && <Text>Error type: {error.description}</Text>}
    <Button
      title="Next"
      onPress={nextStep} />
  </View>
);

export { PhoneNumber }
