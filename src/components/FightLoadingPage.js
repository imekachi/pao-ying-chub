import React from 'react'
import styled from 'styled-components'

import Weapon from './Weapon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Result = styled.div`
  width: 220px;
  height: 220px;
  line-height: 220px;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #FFFFFF;
`

const FightLoadingPage = ({ fightData, loadingTime, callBack }) => {
  const { playerWeapon, opponentWeapon, isWin, isDraw } = fightData
  let resultText = 'LOSE'
  let isLose = !isWin && !isDraw

  if (isWin) {
    resultText = 'WIN'
  } else if (isDraw) {
    resultText = 'DRAW'
  }

  setTimeout(callBack, loadingTime)
  return (
    <Wrapper>
      <Weapon active name={playerWeapon} lose={isLose}/>
      <Result>{resultText}</Result>
      <Weapon active name={opponentWeapon} lose={isWin}/>
    </Wrapper>
  )
}

export default FightLoadingPage