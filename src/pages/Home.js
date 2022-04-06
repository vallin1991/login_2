import { StyledTitle, StyledSubTitle, Avatar } from './../components/Styles';
import React from 'react';

//Logo
import Logo from './../assets/Logo.jpg'
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
                <Avatar image={Logo}/>
            </div>
            <StyledTitle size={65}>
                Welcome to TTPC
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page
            </StyledSubTitle>
        </div>
    );
};

export default Home;