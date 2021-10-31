import * as Yup from 'yup';

import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {Formik} from 'formik';
import React from 'react';
import Validator from 'email-validator';
import firebase from '../firebase/firebase';

const LoginForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Your password has to have at least 8 chars'),
  });

const onLogin= async (email,password) =>{
  try{
    await firebase.auth().signInWithEamilAndPassword(email,password)
    console.log('FireBase login Successful')
  } catch(error){
    Alert.alert(error.message)
  }
}

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Phone no, userName or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View>
              <Text style={{color: '#6BB0F5'}}>Forgot Password</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={() => console.log('You Clicked Me')}
              onPress={handleSubmit}
              >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Dont have am Account?</Text>
              <TouchableOpacity onPress={() =>{
                navigation.push('SignUpScreen')
              }}>
                <Text style={{color: '#6BB0F5'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin:10,
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    height:50,
    justifyContent:'center',
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop:20,
  }),
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default LoginForm;
