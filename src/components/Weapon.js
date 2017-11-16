import styled, { css } from 'styled-components'

import { WEAPON_NAMES } from '../constants/weapons'
import imgHandPaper from '../images/hand-paper.png'
import imgHandRock from '../images/hand-rock.png'
import imgHandScissor from '../images/hand-scissor.png'

export const getWeaponImage = (weaponName) => {
  switch (weaponName) {
    case WEAPON_NAMES.ROCK:
      return imgHandRock
    case WEAPON_NAMES.SCISSOR:
      return imgHandScissor
    case WEAPON_NAMES.PAPER:
      return imgHandPaper
    default:
      return null
  }
}

const styleActive = css`
  box-shadow: inset 0 0 10px 4px rgba(0,0,0,0.5);
  background-color: #d8c839;
`

const Weapon = styled.div`
  display: block;
  width: 220px;
  height: 220px;
  background: url(${props => getWeaponImage(props.name)}) no-repeat center center;
  background-size: 70%;
  border-radius: 50%;
  cursor: pointer;
  filter: ${props => props.lose ? 'grayscale(1) brightness(0.8)' : 'contrast(1.4)'};
  
  ${props => props.active && styleActive}
  &:hover {
    ${styleActive}
  }
`

export default Weapon