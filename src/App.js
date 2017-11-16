import React from 'react'
import styled from 'styled-components'

import ChooseWeaponPage from './components/ChooseWeaponPage'
import FightLoadingPage from './components/FightLoadingPage'
import IntroPage from './components/IntroPage'
import { PAGES } from './constants/pages'
import { getFightResult } from './game/core'

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
      currentPage: PAGES.CHOOSE_WEAPON,
      fightResult: null,
    }

    this.changePage = this.changePage.bind(this)
    this.getUserWeapon = this.getUserWeapon.bind(this)
    this.fight = this.fight.bind(this)
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
      this.changePage(PAGES.LOADING)
      console.log(this.state.fightResult)
    })
  }

  pageToRender() {
    switch (this.state.currentPage) {
      case PAGES.CHOOSE_WEAPON:
        return <ChooseWeaponPage onClickWeapon={this.fight}/>

      case PAGES.LOADING:
        return <FightLoadingPage
          fightData={this.state.fightResult}
          loadingTime={2000}
          callBack={() => this.changePage(PAGES.CHOOSE_WEAPON)}
        />

      case PAGES.RESULT:
      case PAGES.INTRO:
      default:
        return <IntroPage onClickPlay={() => this.changePage(PAGES.CHOOSE_WEAPON)}/>
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
