import * as Yup from 'yup';

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Formik} from 'formik';
import React from 'react';
import Validator from 'email-validator';

const SignupForm = ({navigation}) => {

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        userName: Yup.string().required().min(2,'A username is required'),
        password: Yup.string()
          .required()
          .min(8, 'Your password has to have at least 8 chars'),
      });

      return (
        <View style={styles.wrapper}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              console.log(values);
            }}
            validationSchema={SignupFormSchema}
            validateOnMount={true}>
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
              <>
                <View style={styles.inputField}>
                  <TextInput
                    placeholderTextColor="gray"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                <View style={styles.inputField}>
                  <TextInput
                    placeholderTextColor="gray"
                    placeholder="Username"
                    autoCapitalize="none"
                    textContentType='username'
                    autoFocus={true}
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
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
                  <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                  <Text>Already Have an Account? </Text>
                  <TouchableOpacity onPress={ () => navigation.goBack()}>
                    <Text style={{color: '#6BB0F5'}}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      );
}



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

export default SignupForm