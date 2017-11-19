import { getNumber } from './number'

export const parsePixel = (value) => value + 'px'

export const parseTime = (value, unit = 'ms') => value + unit

export const stripUnit = (inputStr) => getNumber(inputStr)