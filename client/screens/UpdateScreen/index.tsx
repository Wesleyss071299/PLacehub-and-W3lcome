import React, {useState} from 'react'
import { Container, Image, ImageBox, ImageText, SubmitBox, InputBox, Label, HeaderBox} from './styles'
import { useRoute } from '@react-navigation/native';
import { Person } from '../../types';
import * as ImagePicker from 'expo-image-picker';
import Input from '../../components/Input';
import {IP} from '@env'
import api from '../../services/api';

import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';


import {TouchableOpacity} from 'react-native';

import mime from "mime";
import { useDropDown } from '../../contexts';
import { Ionicons } from '@expo/vector-icons';


const UploadScreen: React.FC = () => {
    const route = useRoute();
    const routeParams = route.params as Person
    const initialImage = `http://${IP}:3333/uploads/${routeParams.pictureUrl}`
    const [name, setName] = useState(routeParams.name)
    const [email, setEmail] = useState(routeParams.email)
    const [image, setImage] = useState(initialImage)
    const navigation = useNavigation();

    const {ref} = useDropDown();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });
         
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handlerSubmit = async () => {    
        if (!name || !email || !image) {
         ref.current.alertWithType('error', "Erro!", 'Preencha todos os campos');
         return
        }
    
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
    
        const newImageUri =  "file:///" + image?.split("file:/").join("");
        const imageData = JSON.parse(JSON.stringify({ uri: newImageUri, type: mime.getType(newImageUri), name: image?.split("/").pop()}));
        console.log(imageData)
        if (initialImage != image)
            data.append('file', imageData)
        
        try {
          await api.patch(`persons/${routeParams._id}`, data).then(() => {
          setName('')
          setEmail('')
          ref.current.alertWithType('success', "Success", 'Atualizado com sucesso');
          })
        } catch (error) {
          ref.current.alertWithType('error', "Erro!", 'Algo de inesperado aconteceu!');
          console.log(error.data)
        }
      }
      async function deleteItem(id: string) {
        await api.delete(`persons/${id}`).then(() => {
        });
      }
      const handleDelete = async () => {
        await  deleteItem(routeParams._id)
        navigation.goBack()
      }

    return (
        <>
            <HeaderBox>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <Ionicons name="trash" size={30} color="red"/>
                </TouchableOpacity>
            </HeaderBox>
        <Container contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
            <ImageBox onPress={pickImage}>
                <ImageText>Update</ImageText>
                <Image source={{uri: image}}  resizeMode='cover'/>
            </ImageBox>
            <InputBox>
                <Label>Email</Label>
                <Input value={name} onChangeText={name => setName(name)}/>
                <Label>Name</Label>
                <Input value={email} onChangeText={email => setEmail(email)}/>
            </InputBox>
            <SubmitBox>
                <PrimaryButton title='Update Person' onPress={handlerSubmit}/>
            </SubmitBox>

        </Container>
        </>
    )
}

export default UploadScreen

