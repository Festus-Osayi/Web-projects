import styled from "styled-components";
import Center from "../center/Center";
import ButtonLinks from "../buttonlinks/ButtonLinks";
import CartIcons from "../icons/CartIcons";
import FlyingButton from "../reusable-styles/FlyingButton";
import { RevealWrapper } from "next-reveal"; // animations

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  /** media queries */
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  div:nth-child(1) {
    order: 2;
  }
  /** media queries for bigger screen */
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 25px;
`;

const Images = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto;
  /** media queries for bigger screen */
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              {/* Add to cart button */}
              <RevealWrapper origin="left" delay={0}>
                <Title>{product.title}</Title>
                <Desc>{product.description}</Desc>
                <ButtonsWrapper>
                  <ButtonLinks
                    href={`/products/${product._id}`}
                    size="l"
                    white={1}
                    outline={1}
                  >
                    Read more
                  </ButtonLinks>
                  <FlyingButton
                    white={1}
                    _id={product._id}
                    src={product.images?.[0]}
                    main={1}
                    size="l"
                  >
                    <CartIcons />
                    Add to cart
                  </FlyingButton>
                </ButtonsWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <Column>
            {/* animation */}
            <RevealWrapper delay={0}>
              <Images src={product.images} alt={product.title} />
            </RevealWrapper>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
