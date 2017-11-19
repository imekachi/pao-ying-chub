import styled from 'styled-components'

export const SceneBg = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`

export default SceneBg