import {useField} from 'formik';
import {
    StyledTextInput,
    StyledLabel
} from './../components/Styles';

export const TextInput = ({...props}) => {
    const [field,meta] =useField(props);

    return(
        <div>
            <StyledLabel htmlFor={props.name}>
                </StyledLabel>  
                <StyledTextInput
                {...field}
                {...props}
                />     
                
         </div>
    )
}