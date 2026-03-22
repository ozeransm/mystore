import { styled } from "goober";

const CardDiv = styled("div")`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px auto; 
  width: 320px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
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

const Email = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #444;
`;

const Quantity = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #444;
`;

const Contact = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #444;
`;

const ButtonDiv = styled("div")`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export default function CardOrder({ order, children }) {
  return (
    <CardDiv>
      <Title>{order.name}</Title>
      <Email>{order.email}</Email>
      <Quantity>{order.quantity}</Quantity>
      <Description>{order.description}</Description>
      <Contact>{order.contacts}</Contact>
      <ButtonDiv>{children}</ButtonDiv>
    </CardDiv>
  );
}
