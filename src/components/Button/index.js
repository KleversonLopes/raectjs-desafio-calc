import { ButtonContainer } from "./styles";

export const Button = (props) => {
    const { label, onClick } = props;
    return (
        <ButtonContainer 
            className="Button"
            onClick={onClick}
        >
            { label }
        </ButtonContainer>
    )
};