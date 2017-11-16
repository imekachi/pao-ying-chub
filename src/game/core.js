import { WEAPON_NAMES, WEAPON_WINNER } from '../constants/weapons'


export const getAIWeapon = (weapons = WEAPON_NAMES) => {
  const weaponChoices = Object.keys(weapons)
  const selectedWeaponKey = Math.floor(Math.random() * weaponChoices.length)

  return weapons[weaponChoices[selectedWeaponKey]]
}

export const fight = (playerWeapon, opponentWeapon, weaponWinnerConfig) => {
  const winnerWeapon = weaponWinnerConfig[playerWeapon]

  switch (opponentWeapon) {
    case winnerWeapon: // opponent has winnerWeapon, we lose
      return -1
    case playerWeapon: // opponent has sameWeapon as player, draw
      return 0
    default: // else, we win
      return 1
  }
}

export const isWin = fightResult => fightResult > 0
export const isDraw = fightResult => fightResult === 0

export const getFightResult = (playerWeapon, opponentWeapon = getAIWeapon()) => {
  const fightResult = fight(playerWeapon, opponentWeapon, WEAPON_WINNER)

  return {
    playerWeapon,
    opponentWeapon,
    fightResult,
    isWin: isWin(fightResult),
    isDraw: isDraw(fightResult),
  }
}