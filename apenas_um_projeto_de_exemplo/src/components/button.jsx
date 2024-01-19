import {TouchableOpacity, Text} from 'react-native';
import { styles } from '../styles/styles';

export const Button = ({text}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.txt}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}