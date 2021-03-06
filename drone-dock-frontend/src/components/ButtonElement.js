import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background-color: transparent;
    color: white;
    padding: 8px 20px;
    border: 5px solid var(--white);
    transition: all 0.3s ease-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : 'white')};
        color: #242424;
        transition: 250ms;

    }

`