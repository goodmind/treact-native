import * as React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Button } from 'components/Login/Button';

const t = require('../style');

const Password = ({ error, change, nextStep }) => (
  <View style={t.loginStep}>
    <Text>Cloud password check</Text>
    <Text>
      Please enter your cloud password.
    </Text>
    <View style={t.formGroupLogin}>
      <TextInput
        style={{height: 40}}
        onChange={change}
        key="password"
        secureTextEntry={true}
        // style="form-control form-control-lg"
        placeholder="Your cloud password" />
    </View>
    {error && <Text>Error type: {error.description}</Text>}
    <Button
      title="Submit"
      onPress={nextStep} />
  </View>
);

export { Password }
