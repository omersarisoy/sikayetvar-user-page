'use client'
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { styled } from "styled-components";

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
        justify-content: space-between;
        h1 {
            border-left: 6px solid #F8D442;
            padding-left: 10px;
            font-weight: 700;
            line-height: 39px;
        }
        .sign-in{
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
`

export const CustomLink =  styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 41px;
    transition: all ease .5s;
    border-radius: 4px;
    color: #000000;

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
    width: 100%;
    height: 157px;
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
    justify-content: space-between;
    gap: 20px;
    float: right;
    position: relative;
    top: 70px;
    padding: 20px;
`

export const StudentTitle = styled.div`
    padding: 30px;

`