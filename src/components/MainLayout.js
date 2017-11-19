import React from 'react'
import { FixedLogo } from './Logo'
import SceneBg from './SceneBg'

const MainLayout = ({ bg, showLogo = true, children }) => (
  <SceneBg src={bg}>
    {showLogo && <FixedLogo/>}
    {children}
  </SceneBg>
)

export default MainLayout