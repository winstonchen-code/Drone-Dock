import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100px;
    position: none;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    
`
export const FormWrap = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    justif-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    };
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 300px;
    max-height: 500px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    text-align: center;

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    };
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    text-align: left; 
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 5px 1px 5px 1px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    margin-top: 10px;
    background: #0077B6;
    padding: 5px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

export const LocationImage = styled.div`
    padding-top: 0px;
    padding-bottom: 20px;
    img{
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 5px solid #efefef;
    }
    text-align: center;
`