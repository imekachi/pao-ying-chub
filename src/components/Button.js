import styled from 'styled-components'

export const Button = styled.button`
  border: 0 none;
  width: 300px;
  height: 115px;
  background: url(${props => props.src}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
`

export default Button