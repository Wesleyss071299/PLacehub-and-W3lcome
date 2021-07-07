import styled from "styled-components/native";
import {StatusBar} from 'react-native'
const height = StatusBar.currentHeight as number
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F2F2F2;
`

export const InputBox = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${height + 20}px;
    flex-direction: row;
`
