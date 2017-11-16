import React from 'react'
import styled from 'styled-components'

import { WEAPON_NAMES } from '../constants/weapons'
import Weapon from './Weapon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ChooseWeaponPage = ({ onClickWeapon }) => (
  <Wrapper>
    <Weapon title="ค้อน" name={WEAPON_NAMES.ROCK} onClick={() => onClickWeapon(WEAPON_NAMES.ROCK)}/>
    <Weapon title="กรรไกร" name={WEAPON_NAMES.SCISSOR} onClick={() => onClickWeapon(WEAPON_NAMES.SCISSOR)}/>
    <Weapon title="กระดาษ" name={WEAPON_NAMES.PAPER} onClick={() => onClickWeapon(WEAPON_NAMES.PAPER)}/>
  </Wrapper>
)

export default ChooseWeaponPage