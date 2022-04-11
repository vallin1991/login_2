import React from 'react';

//styled components
import {StyledTextInput, StyledFormArea, 
    StyledFormButton, StyledLabel, Avatar,
    StyledTitle, colors, ButtonGroup} from './../components/Styles';

import logo from './../assets/logo.jpg';
//formik
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';


const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}/>
                <StyledTitle color={colors.theme} size={30}>
                Member Login
                </StyledTitle>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="olga1@example.com"
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                            
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>

                             
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
        
    );
}

export default Login;