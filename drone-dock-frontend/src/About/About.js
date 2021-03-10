import React from 'react'
import styled from 'styled-components'
import ScrollToTop from '../components/ScrollToTop';


const Section = styled.section`
    width: 100%;
    height: 730px;
    padding: 2rem 0rem;
`;

const Container = styled.div`
    // padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 2rem 4rem;
    order: ${({reverse}) => (reverse? '2' : '1')};

    h1 {
        margin-bottom: 2.5rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        font-weight: bold
    }
    
    p {
        margin-bottom: 2rem;
        font-size: 20px;
    }
`

const ColumnRight = styled.div`
    padding: 1rem 4rem;
    order: ${({reverse}) => (reverse? '1' : '2')};
    display: flex;
    justify-content: center;
    // align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse? '2' : '1')};
    }

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%
        }
    }

`

const About = ({heading, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix, reverse, image }) => {
    return (
        <>
        <ScrollToTop />
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <p>{paragraphThree}</p>
                    <p>{paragraphFour}</p>
                    <p>{paragraphFive}</p>
                    <p>{paragraphSix}</p>
                    {/* <Button to="/signup">{buttonLabel}</Button> */}
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
        </>
    )
}

export default About
