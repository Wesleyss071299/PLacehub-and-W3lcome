import React from 'react';

import { Image } from 'react-native';
import { Container } from './styles'
import {IP} from '@env'

type IProps = {
  pictureUrl: string
}

const PersonProfilePicture: React.FC<IProps> = ({ pictureUrl }) =>  {
  return (
    <Container>
       <Image source={{uri: `http://${IP}:3333/uploads/${pictureUrl}`}} style={{width: 'auto', height: '100%'}} resizeMode='cover'/>
    </Container>
  );
}


export default PersonProfilePicture