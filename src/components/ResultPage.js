import React from 'react'

import { stylesResponsive, Weapon, WeaponBox, WeaponWrapper } from './Weapon'
import { handTilt } from './FightLoadingPage'

const Result = WeaponBox.extend`
  line-height: ${stylesResponsive.mobile.height};
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #FFFFFF;
`

const WeaponResult = Weapon.extend`
  transform: rotate(${handTilt.end});
  transform-origin: bottom;
`

const ResultPage = ({ fightData, onRetryClick }) => {
  const { playerWeapon, opponentWeapon, isWin, isDraw } = fightData
  let resultText = 'LOSE'
  let isLose = !isWin && !isDraw

  if (isWin) {
    resultText = 'WIN'
  } else if (isDraw) {
    resultText = 'DRAW'
  }

  return (
    <WeaponWrapper>
      <WeaponResult active name={opponentWeapon} lose={isWin}/>
      <Result onClick={onRetryClick}>{resultText}</Result>
      <WeaponResult active name={playerWeapon} lose={isLose}/>
    </WeaponWrapper>
  )
}

export default ResultPage