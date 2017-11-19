import React from 'react'
import imgResultDraw from '../images/result-draw.png'
import imgResultLose from '../images/result-lose.png'
import imgResultWin from '../images/result-win.png'
import imgBGVersus from '../images/scene-3.jpg'
import MainLayout from './MainLayout'

import { Weapon, WeaponWrapper } from './Weapon'

const ResultPopUp = Weapon.withComponent('img').extend`
  width: auto;
`

const ResultPage = ({ fightData, onRetryClick }) => {
  const { playerWeapon, opponentWeapon, isWin, isDraw } = fightData
  let resultImg = imgResultLose
  let isLose = !isWin && !isDraw

  if (isWin) {
    resultImg = imgResultWin
  } else if (isDraw) {
    resultImg = imgResultDraw
  }

  return (
    <MainLayout bg={imgBGVersus}>
      <WeaponWrapper>
        <Weapon name={opponentWeapon} lose={isWin}/>
        <ResultPopUp src={resultImg} onClick={onRetryClick}/>
        <Weapon name={playerWeapon} lose={isLose}/>
      </WeaponWrapper>
    </MainLayout>
  )
}

export default ResultPage