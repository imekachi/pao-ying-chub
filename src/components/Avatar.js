import styled from 'styled-components'
import imgPlayerMock from '../images/player-mock.png'
import imgMascot from '../images/mascot.png'

const Avatar = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: 4px solid #FFFFFF;
  border-radius: 50%;
  background: url(${props => (props.mascot) ? imgMascot : props.img || imgPlayerMock}) #CCCCCC no-repeat center center;
  background-size: cover;
  box-shadow: inset 0 0 8px -1px rgba(0,0,0,0.3);
  width: ${props => props.size || '150px'};
  height: ${props => props.size || '150px'};
`

export default Avatar