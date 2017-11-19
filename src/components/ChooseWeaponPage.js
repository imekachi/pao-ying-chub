import React from 'react'

import { WEAPON_NAMES } from '../constants/weapons'
import { Weapon, WeaponWrapper } from './Weapon'

const ChooseWeaponPage = ({ onClickWeapon }) => (
  <WeaponWrapper>
    <Weapon title="ค้อน" name={WEAPON_NAMES.ROCK} onClick={() => onClickWeapon(WEAPON_NAMES.ROCK)}/>
    <Weapon title="กรรไกร" name={WEAPON_NAMES.SCISSOR} onClick={() => onClickWeapon(WEAPON_NAMES.SCISSOR)}/>
    <Weapon title="กระดาษ" name={WEAPON_NAMES.PAPER} onClick={() => onClickWeapon(WEAPON_NAMES.PAPER)}/>
  </WeaponWrapper>
)

export default ChooseWeaponPage