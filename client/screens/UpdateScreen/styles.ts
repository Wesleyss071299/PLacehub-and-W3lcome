import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #F2F2F2;
`

export const ImageText = styled.Text`
    color: #000;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    margin-top: 40px;
`

export const Image = styled.Image`
    opacity: 0.3;
    width: auto;
    height: 100%;
`

export const ImageBox = styled.TouchableOpacity`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top: 10px;
    overflow: hidden;
`

export const SubmitBox = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const Label = styled.Text`
    color: #000;
    font-size: 16px;
    align-self: flex-start;
    margin-top: 25px;
    margin-bottom: 8px;
    font-weight: bold;
`

export const InputBox = styled.View`
    flex: 1;
    align-items: center;
`

export const HeaderBox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
`      
