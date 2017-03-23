import * as React from 'react';
import { View } from 'react-native';
const t = require('../style.js');

const Password = ({ error, change, nextStep }) => (
  <View style={t.loginStep}>
    <h1>Cloud password check</h1>
    <p>
      Please enter your cloud password.
    </p>
    <View style={t.formGroupLogin}>
      <input
        onChange={change}
        name="password"
        // style="form-control form-control-lg"
        placeholder="Your cloud password" type="password" />
    </View>
    {error && <View>Error type: {error.description}</View>}
    <button onClick={nextStep} style={[t.btn, t.primary]}>Submit</button>
  </View>
);

export { Password }
