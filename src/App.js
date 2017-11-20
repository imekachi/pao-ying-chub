import React from 'react'
import styled from 'styled-components'

import ChooseWeaponPage from './components/ChooseWeaponPage'
import FightLoadingPage from './components/FightLoadingPage'
import IntroPage from './components/IntroPage'
import PlayersInfo from './components/PlayersInfo'
import ResultPage from './components/ResultPage'
import { PAGES } from './constants/pages'
import { getFightResult } from './game/core'
import { loginFacebook } from './util/facebook'

const Outer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isFirstTry: true,
      currentPage: PAGES.INTRO,
      // currentPage: PAGES.CHOOSE_WEAPON,
      // currentPage: PAGES.PLAYER_INFO,
      // currentPage: PAGES.LOADING,
      fightResult: null,
      playerData: null,
    }

    this.changePage = this.changePage.bind(this)
    this.getUserWeapon = this.getUserWeapon.bind(this)
    this.fight = this.fight.bind(this)
    this.playBtnClick = this.playBtnClick.bind(this)
  }

  changePage(pageName) {
    return this.setState({
      currentPage: pageName,
    })
  }

  getUserWeapon(userWeapon) {
    this.setState({
      userWeapon,
    })
  }

  fight(userWeapon) {
    this.setState({
      fightResult: getFightResult(userWeapon),
    }, () => {
      if (this.state.isFirstTry) {
        this.setState({ isFirstTry: false })
        this.changePage(PAGES.PLAYER_INFO)
      } else {
        this.changePage(PAGES.LOADING)
      }
      console.log(this.state.fightResult)
    })
  }

  async playBtnClick() {
    if (!this.state.playerData) {
      this.setState({
        playerData: await loginFacebook()
      })
    }

    this.changePage(PAGES.CHOOSE_WEAPON)
  }

  pageToRender() {
    switch (this.state.currentPage) {
      case PAGES.CHOOSE_WEAPON:
        return <ChooseWeaponPage onClickWeapon={this.fight}/>

      case PAGES.PLAYER_INFO:
        return (
          <PlayersInfo
            playerFBId={this.state.playerData.id}
            showDuration={3000}
            callBack={() => this.changePage(PAGES.LOADING)}
          />
        )

      case PAGES.LOADING:
        return (
          <FightLoadingPage
            fightData={this.state.fightResult}
            shakingCount={4}
            callBack={() => this.changePage(PAGES.RESULT)}
          />
        )

      case PAGES.RESULT:
        return (
          <ResultPage
            fightData={this.state.fightResult}
            onShareClick={() => console.log('SHARE')}
            onRetryClick={() => this.changePage(PAGES.CHOOSE_WEAPON)}
          />
        )
      case PAGES.INTRO:
      default:
        return <IntroPage onClickPlay={this.playBtnClick}/>
    }
  }

  render() {
    return (
      <Outer>
        {this.pageToRender()}
      </Outer>
    )
  }
}

export default App
