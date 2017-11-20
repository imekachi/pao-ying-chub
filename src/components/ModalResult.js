import React from 'react'
import styled from 'styled-components'
import imgReplayBtn from '../images/btn-replay.png'

import imgShareBtn from '../images/btn-share.png'
import imgHeader from '../images/header.png'
import { parsePixel } from '../util/unitConverter'
import Button from './Button'

const BackDrop = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
`
const Modal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 85%;
  height: ${props => props.miniMode ? '315px' : '420px'};
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 20px;
`

const Header = styled.img`
  width: 200px;
  margin-top: -20%;
`

const rewardImgSize = 280

const RewardImg = styled.img`
 width: ${parsePixel(rewardImgSize)};
 height: ${parsePixel(rewardImgSize * 0.75)};
 background-color: #E5E5E5;
 margin-bottom: 10px;
`

const ShareBtn = Button.extend`
  width: ${parsePixel(rewardImgSize)};
  height: 107px;
`

const ReplayBtn = ShareBtn.extend`
  margin-top: 10px;
`

const ModalResult = ({ isWin, onReplayClick, onShareClick }) => {
  return (
    <BackDrop>
      <Modal miniMode={!isWin}>
        <Header src={imgHeader}/>
        {isWin
          ? <RewardImg src={null}/>
          : <ReplayBtn src={imgReplayBtn} title="ลองใหม่อีกครั้งนะ" onClick={onReplayClick}/>
        }
        <ShareBtn src={imgShareBtn} title="แชร์ไปยัง Facebook" onClick={onShareClick}/>
      </Modal>
    </BackDrop>
  )
}

export default ModalResult