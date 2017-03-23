import * as React from 'react';
import { View } from 'react-native';

const s = require('./style.js');
const t = require('../../style.js');

const PhoneNumber = ({ error, nextStep, change, phoneCode }) => (
  <View style={t.loginStep}>
    <h1>Your Phone</h1>
    <p>
      Please confirm your country code and enter your phone number.
    </p>
    <View
      // style={`row ${t.formGroupLogin}`}
      style={t.formGroupLogin}>
      <input
        onChange={change}
        name="phoneCode"
        style={s.phoneCode}
        // style={`${s.phoneCode} col-xs-2 form-control form-control-lg`}
        value={phoneCode} type="tel" />
      <input
        onChange={change}
        name="phoneNumber"
        // style="col-xs-10 form-control form-control-lg"
        placeholder="--- --- -- --" type="tel" />
    </View>
    {error && <View>Error type: {error.description}</View>}
    <button onClick={nextStep} style={[t.btn, t.primary]}>Next</button>
  </View>
);

export { PhoneNumber }
