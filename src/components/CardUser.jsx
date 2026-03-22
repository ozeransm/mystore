import { styled } from "goober";

const CardDiv = styled("div")`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px auto; 
  max-width: 320px;
  display: flex;
  flex-direction: column-reverse;
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

const Email = styled("p")`
  margin: 0;
  font-weight: bold;
  color: #673ab8;
`;

const Description = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #555;
`;
const Role = styled("p")`
  margin: 0;
  font-size: 14px;
  color: #555;
`;
const ButtonDiv = styled("div")`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;
export default function CardUser({user, children}) {
    return (
        <CardDiv>
            {/* <Image src={user.image} alt={user.name} /> */}
            <Title>{user.name}</Title>
            <Email>${user.email}</Email>
            <Description>{user.description}</Description>
            <Role>{user.role}</Role>
            <ButtonDiv>{children}</ButtonDiv>
        </CardDiv>
    );
}