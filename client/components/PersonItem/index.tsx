import * as React from 'react';

import { Text } from 'react-native';
import { Container, Title, InfoBox, ActionBox, TextBox } from './styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import PersonProfilePicture from '../PersonPrfilePicture';
import { useNavigation } from '@react-navigation/native';

type IProps = {
  id: string,
  name: string,
  email: string,
  pictureUrl: string,
}

const PersonItem: React.FC<IProps> = ({ id, name, email, pictureUrl  }) =>  {
  const navigation = useNavigation();


  return (
    <Container>

      <InfoBox>
        <PersonProfilePicture pictureUrl={pictureUrl}/>
        <TextBox>
          <Title>{name}</Title>
          <Text>{email}</Text>
        </TextBox>
      </InfoBox>
      
      <ActionBox>
        <MaterialIcons name="edit" size={24} color="black" style={{marginRight: 10}} onPress={() => navigation.navigate('UpdateScreen', {
          _id: id,
          name,
          email, 
          pictureUrl
        })} />

      </ActionBox>
    </Container>
  );
}


export default PersonItem