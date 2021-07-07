import React from 'react'
import { TextInput, InputContainer } from './srtyles'

interface Props {
    placeholder?: string
    value: string 
    secureTextEntry?: boolean
    onChangeText: (text: string) => void | undefined
}


const Input: React.FC<Props> = ({ children, placeholder, value, secureTextEntry, onChangeText }) => {
    return(
        <InputContainer>
            <TextInput
                numberOfLines={1}
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry ? true : false}
                onChangeText={onChangeText}
                textAlignVertical='center'
                />
                    { children }
        </InputContainer>
    )
}

export default Input;