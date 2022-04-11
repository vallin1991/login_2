import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from './../components/Styles';
import React from 'react';

//Logo
import logo from './../assets/logo.jpg'
const Home = () => {
    return (
        <div>
            <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}
            >
                <Avatar image={logo}/>
            </div>
            <StyledTitle size={65}>
                Welcome to Buster Construction
            </StyledTitle>
            <StyledSubTitle size={27}>
                When you need help don't think it call Buster
            </StyledSubTitle>
            <ButtonGroup><StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton></ButtonGroup>
        </div>
    );
};

export default Home;