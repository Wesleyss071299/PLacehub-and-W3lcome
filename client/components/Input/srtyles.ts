import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const InputContainer = styled.View`
    flex-direction: row;
    height: 50px;
    width: ${windowWidth - 40}px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #FDFCFC;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    color: #000;
    flex: 1;
    margin-left: 10px;
`