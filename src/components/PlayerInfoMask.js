import React from 'react'
import styled from 'styled-components'

import imgAvatarAI from '../images/avatar-ai.png'
import { getUserProfile } from '../util/facebook'
import { AvatarAI, AvatarPlayer } from './PlayersInfo'

const PlayerAvatarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`

const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
const PlayerInfoMask = ({ playerFBId }) => (
  <PlayerAvatarWrapper>
    <FlexRight>
      <AvatarAI src={imgAvatarAI} width={80}/>
    </FlexRight>
    <FlexLeft>
      <AvatarPlayer src={getUserProfile(playerFBId)} frameWidth={80} imgWidth={63} top={5} left={8} corner={10}/>
    </FlexLeft>
  </PlayerAvatarWrapper>
)

export default PlayerInfoMask