import * as React from 'react';
import { View } from 'react-native';
const t = require('../style.js');

const AuthCode = ({ form, error, nextStep, change }) => (
  <View style={t.loginStep}>
    <h1>{form.phoneNumber}</h1>
    <p>
      Please enter the code you've just received in the previous <strong>Telegram</strong> app.
    </p>
    <View
      // style={`row center-xs ${t.formGroupLogin}`}
      style={t.formGroupLogin}>
      <input
        onChange={change}
        name="authCode"
        // style="col-xs-4 form-control form-control-lg"
        placeholder="Your code" type="text" maxLength={5} />
    </View>
    {error && <View>Error type: {error.description}</View>}
    <button onClick={nextStep} style={[t.btn, t.primary]}>Next</button>
  </View>
);

export { AuthCode }
