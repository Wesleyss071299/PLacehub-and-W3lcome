import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 20px;
    border-width: 1px;
    border-color: #DADDE1;

    padding: 5px;   
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
export const TextBox = styled.View`
    margin-left: 10px;
`

export const Separator = styled.View`
    background-color: #000;
    height: 1px;
    width: 95%;
    margin-top: 5px;
`
export const InfoBox = styled.View`
    flex-direction: row;
    align-items: center;
`
export const ActionBox = styled.View`
    flex-direction: row;
    margin-right: 20px;
`