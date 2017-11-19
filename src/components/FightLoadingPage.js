import React from 'react'
import styled, { keyframes } from 'styled-components'

import { stylesResponsive, Weapon, WeaponBox, WeaponWrapper } from './Weapon'
import { WEAPON_NAMES } from '../constants/weapons'
import { parseTime } from '../util/unitConverter'

const Result = WeaponBox.extend`
  line-height: ${stylesResponsive.mobile.height};
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #FFFFFF;
`

export const handTilt = {
  start: '-20deg',
  end: '10deg',
}

const shakingHand = keyframes`
  0% {
    transform: rotate(${handTilt.start});
  }
  
  50% {
    transform: rotate(${handTilt.end});
  }
  
  100% {
    transform: rotate(${handTilt.start});
  }
`

const WeaponLoading = Weapon.extend`
  transform: rotate(${handTilt.start});
  transform-origin: bottom;
  animation: ${shakingHand} ${props => props.duration} ${props => props.repeatCount || 'infinite'};
`

const FightLoadingPage = ({ fightData, shakingCount, callBack }) => {
  const { playerWeapon, opponentWeapon } = fightData
  const animationTimeLap = 600
  const loadingTime = ((shakingCount - 1) * animationTimeLap) + (animationTimeLap / 2)
  // const loadingTime = shakingCount * animationTimeLap

  setTimeout(callBack, loadingTime)
  return (
    <WeaponWrapper>
      {/*<Weapon active name={playerWeapon}/>*/}
      <WeaponLoading duration={parseTime(animationTimeLap)} name={WEAPON_NAMES.ROCK}/>
      <Result />
      <WeaponLoading duration={parseTime(animationTimeLap)} name={WEAPON_NAMES.ROCK}/>
    </WeaponWrapper>
  )
}

export default FightLoadingPage