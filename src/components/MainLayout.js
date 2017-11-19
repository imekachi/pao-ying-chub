import React from 'react'
import SceneBg from './SceneBg'
import { FixedLogo } from './Logo'

const MainLayout = ({ bg, showLogo = true, children }) => (
  <SceneBg src={bg}>
    {showLogo && <FixedLogo/>}
    { children }
  </SceneBg>
)

export default MainLayout