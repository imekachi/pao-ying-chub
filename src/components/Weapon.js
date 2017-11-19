import styled from 'styled-components'

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

export const stylesResponsive = {
  mobile: {
    width: '180px',
    height: '180px',
  },
}

export const WeaponWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const WeaponBox = styled.div`
  display: block;
  width: ${stylesResponsive.mobile.width};
  height: ${stylesResponsive.mobile.width};
`

export const Weapon = WeaponBox.extend`
  background: url(${props => getWeaponImage(props.name)}) no-repeat center center;
  background-size: 80%;
  border-radius: 50%;
  cursor: pointer;
  ${props => props.lose && 'filter: brightness(0.7) grayscale(1);'}
`

export default Weapon