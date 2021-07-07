import React from 'react'
import { GestureResponderEvent} from 'react-native'
import { Button, Text } from './styles'

interface Props {
    title: string
    onPress: (event: GestureResponderEvent) => Promise<void> | Promise<() => void>
}

const PrimaryButton:React.FC<Props> = ({ title, onPress }) => {
    return (
        <Button onPress={onPress}>
            <Text>{title}</Text>
        </Button>
    )
}

export default PrimaryButton