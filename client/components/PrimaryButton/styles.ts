import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width


export const Button = styled.TouchableOpacity`
    width:  ${windowWidth - 40}px;
    height: 50px;
    background-color: #2f95dc;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
`
export const Text = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`