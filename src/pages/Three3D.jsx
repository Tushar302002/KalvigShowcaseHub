import React from 'react'
import Top3dWork from '../components/Three3d/Top3dWork'
import ThreeDdesign from '../components/Three3d/3Ddesigns'
import Three3danimation from '../components/Three3d/Three3dAnimation'
import ProductVisual from '../components/Three3d/ProductVisual'
import ProductPreview from '../components/Three3d/ProductPreview'
import ProductConfigurator from '../components/Three3d/ProductConfigurator'
import XrVr from '../components/Three3d/XrVr'
import SectionDivision_Version1 from '../components/SectionDivision/SectionDivision_Version1'

function Three3D() {
  return (
    <div>
      <Top3dWork/>
      <SectionDivision_Version1/>
      <ThreeDdesign/>
      <SectionDivision_Version1/>
      <Three3danimation/>
      <SectionDivision_Version1/>
      <ProductVisual/>
      <SectionDivision_Version1/>
      <ProductPreview/>
      <SectionDivision_Version1/>
      <ProductConfigurator/>
      <XrVr/>
    </div>
  )
}

export default Three3D