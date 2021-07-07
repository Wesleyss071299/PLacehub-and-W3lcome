import React, {useState} from 'react';
import { Container, ChooseImageBox, TitleBox, Label, InputBox, SubmitBox } from './styles'
import { ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";
import Input from '../../components/Input';
import { FontAwesome } from '@expo/vector-icons';
import SecondaryButton from '../../components/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton';
import SelectedPictureBox from '../../components/SelectedPictureBox';
import api from '../../services/api';
import {useDropDown} from '../../contexts/index'

interface ImageFile {
  uri: string,
}


const AddScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<ImageFile>()

  const {ref} = useDropDown();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
         
    if (!result.cancelled) {
        setImage({
            uri: result.uri,
        });
    }
};

  const handlerSubmit = async () => {
    setLoading(true)


    if (!name || !email || !image) {
     ref.current.alertWithType('error', "Erro!", 'Escolha uma foto e preencha todos os campos');
     setLoading(false)
     return
    }

    const data = new FormData()
    data.append('name', name)
    data.append('email', email)

    const newImageUri =  "file:///" + image?.uri.split("file:/").join("");
    const imageData = JSON.parse(JSON.stringify({ uri: newImageUri, type: mime.getType(newImageUri), name: image?.uri.split("/").pop()}));

    data.append('file', imageData)
    
    try {
      await api.post('persons', data).then(() => {
      setName('')
      setEmail('')
      setImage(undefined)
      setLoading(false)
      ref.current.alertWithType('success', "Success", 'Salvo com sucesso');
      })
    } catch (error) {
      ref.current.alertWithType('error', "Erro!", 'Algo de inesperado aconteceu!');
      setLoading(false)
    }
  }

  return (
    <Container>
      <ChooseImageBox>
        <TitleBox>
          <Label>Choose a picture</Label>
          {image && <SelectedPictureBox/>}
        </TitleBox>
        <SecondaryButton onPress={pickImage}>
          <FontAwesome name="photo" size={24} color="white" />
        </SecondaryButton>
      </ChooseImageBox>
      <InputBox>
        <Label>Name</Label>
        <Input value={name} onChangeText={name => setName(name)}/>
        <Label>Email</Label>
        <Input value={email} onChangeText={email => setEmail(email)}/>

      </InputBox>
      {loading && <ActivityIndicator size="large" color="#000"  style={{ alignSelf: 'center', flex: 1}}/>}
      <SubmitBox>
        <PrimaryButton onPress={handlerSubmit} title="Add new Person"/>
      </SubmitBox>
    </Container>
  );
}

export default AddScreen