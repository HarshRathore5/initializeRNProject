import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/slices/authSlice';
import { loginUser } from '../../../actions/authActions';


export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const { user, token } = await loginUser(username, password);
    dispatch(loginSuccess({ user, token }));
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};
