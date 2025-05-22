import React from 'react'
import TopDesignWork from '../components/Design/TopDesignWork'
import UI_UX from '../components/Design/UI_UX'
import LogoDesign from '../components/Design/LogoDesign'
import MotionGraphics from '../components/Design/MotionGraphics'
import SectionDivision_Version1 from '../components/SectionDivision/SectionDivision_Version1'
import BrandingAndIdentity from '../components/Design/BrandingAndIdentity'
import PresentationDesign from '../components/Design/PresentationDesign'

function Design() {
  return (
    <div>
      <TopDesignWork />
      <SectionDivision_Version1 />
      <UI_UX />
      <SectionDivision_Version1 />
      <LogoDesign />
      <SectionDivision_Version1 />
      <MotionGraphics />
      <SectionDivision_Version1 />
      <BrandingAndIdentity />
      <SectionDivision_Version1 />
      <PresentationDesign />
    </div>
  )
}

export default Design