import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addWord } from '../redux/Slices';

const ScreenHome = ({navigation}) => {
  const dictionaryState = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();
  const [englishWord, setEnglishWord] = useState('');
  const [vietnameseWord, setVietnameseWord] = useState('');

  const handleAddWord = () => {
    dispatch(addWord({ english: englishWord, vietnamese: vietnameseWord }));
    setEnglishWord('');
    setVietnameseWord('');
  };

  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="English Word"
        value={englishWord}
        onChangeText={(text) => setEnglishWord(text)}
      />
      <TextInput
       style={{marginVertical: 50}}
        placeholder="Vietnamese Meaning"
        value={vietnameseWord}
        onChangeText={(text) => setVietnameseWord(text)}
      />
      <Button title="Add Word" onPress={handleAddWord} />

      <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>Words added:</Text>
      {dictionaryState.english.map((word, index) => (
        <Text key={index}>
          {word}: {dictionaryState.vietnamese[index]}
        </Text>
      ))}
    </View>
  );
};

export default ScreenHome;




