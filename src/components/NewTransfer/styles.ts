import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup  from "@radix-ui/react-radio-group";


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vw;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
min-width: 32rem;
border-radius: 6px;
padding: 2.5rem 3rem;
background: ${props => props.theme['gray-800']};

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }

    button[type="submit"] {
        height: 58px;
        width: 416px;
        border: 0;
        background: ${props => props.theme["red-500"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;
        
    
        &:hover {
            background: ${props => props.theme["red-700"]};
            transitions: background-color 0.2s;
        }
    }

}
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};
`;

export const TransferType = styled(RadioGroup.Root)`
display: grid;
margin-top: 0.5rem;
`;

interface TransferTypeButtonProps {
    variant?: 'income' | 'outcome';
}

export const TransferTypeButton = styled(RadioGroup.Item)<TransferTypeButtonProps>`
background: ${props => props.theme["gray-800"]};
height: 58px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
cursor: pointer;
border: 0;
`;

