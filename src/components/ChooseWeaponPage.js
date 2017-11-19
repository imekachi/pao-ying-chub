import React from 'react'

import { WEAPON_NAMES } from '../constants/weapons'
import imgBGChooseWeapon from '../images/scene-2.jpg'
import MainLayout from './MainLayout'
import { Weapon, WeaponWrapper } from './Weapon'

const ChooseWeaponPage = ({ onClickWeapon }) => (
  <MainLayout bg={imgBGChooseWeapon}>
    <WeaponWrapper>
      <Weapon title="ค้อน" name={WEAPON_NAMES.ROCK} onClick={() => onClickWeapon(WEAPON_NAMES.ROCK)}/>
      <Weapon title="กรรไกร" name={WEAPON_NAMES.SCISSOR} onClick={() => onClickWeapon(WEAPON_NAMES.SCISSOR)}/>
      <Weapon title="กระดาษ" name={WEAPON_NAMES.PAPER} onClick={() => onClickWeapon(WEAPON_NAMES.PAPER)}/>
    </WeaponWrapper>
  </MainLayout>
)

export default ChooseWeaponPage