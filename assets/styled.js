'use client'
import { Button, TextField } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import Link from "next/link";
import { styled } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };

export const LoginPage = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #FEAF00 , #F8D442);
    display: flex;
    align-items: center;
    justify-content: center;

    .loginWrapper {
        width: 475px;
        height: 550px;
        border-radius: 20px;
        padding: 30px;
        background-color: #FFFFFF;
        box-shadow: 2px 5px 10px 0px #0000001A;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            border-left: 6px solid #F8D442;
            padding-left: 10px;
            font-weight: 700;
            line-height: 39px;
        }
        .sign-in{
            margin-bottom: 40px;
            h2 {
                text-align: center;
            }
        }
        .email-form {
            span {
                font-weight: 500;
            }
            .forgot {
                text-align: center;
                a {
                    font-weight: 500;
                    color: #FEAF00;
                    text-decoration: underline;
                }
            }
        }
        @media ${device.mobileL} { 
           h1 {
            font-size: 28px;
           }
        }
    }
`

export const CustomTextField = styled(TextField)`
    width: 100%!important;
    margin-bottom: 20px!important;
    margin-top: 10px!important;
    .MuiFormControl-root.MuiTextField-root {
        border: 1px solid #E5E5E5;
        position: relative;
    }
    label {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        color: #CDCDCD;
    }
    .MuiInputBase-root {
        max-height: 44px;
    }
`

export const SignInButton = styled(Button)`
    &.MuiButton-root {
        height: 44px;
        width: 100%;
        background-color: #FEAF00;
        box-shadow: none;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        margin-bottom: 20px;
        &:hover {
            background-color: #F8D442;
            box-shadow: none;
        }
    }
`

export const Sidebar = styled.div`
    height: 100vh;
    position: fixed;
    width: 270px;
    background-color: #F2EAE1;
    padding: 24px 38px;

    h4{
        border-left: 4px solid #F8D442;
        padding-left: 8px;
        font-weight: 700;
        line-height: 24.5px;
        margin-top: 0;
    }
    .avatarWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 50px;

        img {
            border-radius: 50%;
        }
        p {
            font-size: 17px;
            font-weight: 700;
            line-height: 21px;
            color: #000000;
        }
        span {
            color: #FEAF00;
        }
    }

    .menuItems {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 100px;
    }

    .logout {
        position: absolute;
        bottom: 24px;
        transform: translate(75%);
        text-decoration: none;
        color: #000000;
        display: flex;
        gap: 20px;
        align-items: center;
    }
    @media ${device.tablet} { 
          display: none;
        }
`

export const CustomLink =  styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    transition: all ease .5s;
    border-radius: 4px;
    color: #000000;
    padding: 12px 50px;

    &:hover, :focus {
        background-color: #FEAF00;
    }
`

export const Header = styled.div`
    width: calc(100% - 270px);
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    right: 0;
    padding: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Card = styled.div`
    background: ${props => props.$background};   
    width: 300px;
    height: 160px;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
        color: ${props =>props.$color || '6C6C6C'}
    }

    h1 {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
        align-self: end;
    }
`

export const Hero = styled.div`
    width: calc(100% - 270px);
    display: flex;
    gap: 30px;
    float: right;
    position: relative;
    top: 70px;
    padding: 30px;
    flex-wrap: wrap;
    @media ${device.tablet} { 
        width: 100%;
    }
`
export const StudentHero = styled.div`
    width: calc(100% - 270px);
    height: calc(100vh - 70px);
    float: right;
    position: relative;
    top: 70px;
    padding: 0 30px;
    background-color: #F8F8F8;

    .MuiPaper-root {
        box-shadow: none;

        p {
            font-size: 14px;
            color: #9FA2B4;
        }

        >div:nth-child(odd) {
            background-color: #F8F8F8;
        }
        .MuiTableContainer-root table thead tr {
            box-shadow: none;
        }
        
        >div:nth-child(1) {
            >.Mui-ToolbarDropZone {
                display: none;
            }
            >.MuiBox-root {
                position: relative;
                display: flex;
                align-items: center;

                button {
                    position: absolute;
                    right: 0;
                    background-color: #FEAF00;
                    box-shadow: none;
                    border-radius: 4px;
                    padding: 10px 15px;

                }
                >div {
                    position: absolute;
                    right: 200px;

                    .MuiInputBase-root {
                        background-color: #FFFFFF;
                        border-radius: 8px;
                        border: 1px solid #E5E5E5;
                    }
                    input {
                        padding: 10px;
                        font-size: 14px;
                        color: #C4C4C4;
                        font-family: 'Montserrat', sans-serif;
                    }

                    fieldset {
                        border: none;
                    }
                }
            }
        }
    }
    @media ${device.tablet} { 
        width: 100%;
    }
    @media ${device.laptop} { 
        h2 {
            display: none;
        }
    }

    
`