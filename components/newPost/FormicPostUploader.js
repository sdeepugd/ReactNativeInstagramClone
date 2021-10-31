import * as Yup from 'yup';

import {Button, Image, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {Divider} from 'react-native-elements/dist/divider/Divider';
import {Formik} from 'formik';
import { NavigationContainer } from '@react-navigation/native';
import {validurl} from 'valid-url'

const uploadPostSchema = Yup.object().shape({
  imageurl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'caption has reached the limits'),
});

const PLACEHOLDR_IMG =
  'https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png';

const FormicPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDR_IMG);

  return (
    <Formik
      initialValues={{caption: '', imageurl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log();
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: validurl.isUrl(thumbnailUrl) ? thumbnailUrl : PLACEHOLDR_IMG}}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 5}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                placeholder="Write a Caption"
                placeholderTextColor="gray"
                multiline={true}
                value={values.caption}
                onBlur={handleBlur('caption')}
                onChangeText={handleChange('caption')}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 18}}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            value={values.imageurl}
            onBlur={handleBlur('imageurl')}
            onChangeText={handleChange('imageurl')}
          />
          {errors.imageurl && (
            <Text style={{fontSize: 20, color: 'red'}}>{errors.imageurl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormicPostUploader;
