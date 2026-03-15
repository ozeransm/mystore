import { styled } from "goober";

const CardDiv = styled("div")`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px 0;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Image = styled("img")`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`;

const Title = styled("h3")`
  margin: 0;
  font-size: 18px;
`;

const Price = styled("p")`
  margin: 0;
  font-weight: bold;
  color: #673ab8;
`;

const Description = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

export default function Card({name, price, description, image}) {
    return (
        <CardDiv>
            <Image src={image} alt={name} />
            <Title>{name}</Title>
            <Price>${price.toFixed(2)}</Price>
            <Description>{description}</Description>
        </CardDiv>
    );
}