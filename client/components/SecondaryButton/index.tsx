import React from 'react'
import { GestureResponderEvent} from 'react-native'
import { Button } from './styles'

interface Props {
    onPress: (event: GestureResponderEvent) => Promise<void> | undefined
}

const SecondaryButton:React.FC<Props> = ({ children, onPress }) => {
    return (
        <Button onPress={onPress}>
            {children}
        </Button>
    )
}

export default SecondaryButton