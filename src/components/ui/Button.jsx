import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`