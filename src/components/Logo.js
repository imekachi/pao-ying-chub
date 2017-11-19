import React from 'react'
import styled from 'styled-components'
import imgShippopLogo from '../images/shippop-logo.png'

export const LogoStyle = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: ${props => props.width || '120px'};
`

export const FixedLogoStyle = LogoStyle.extend`
  position: fixed;
  top: 12px;
  left: 10px;
`

export const FixedLogo = (...props) => (
  <FixedLogoStyle src={imgShippopLogo} {...props}/>
)


export default FixedLogo