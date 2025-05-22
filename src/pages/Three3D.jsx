import React from 'react'
import Top3dWork from '../components/Three3d/Top3dWork'
import ThreeDdesign from '../components/Three3d/3Ddesigns'
import Three3danimation from '../components/Three3d/Three3dAnimation'
import ProductVisual from '../components/Three3d/ProductVisual'
import ProductPreview from '../components/Three3d/ProductPreview'
import ProductConfigurator from '../components/Three3d/ProductConfigurator'
import XrVr from '../components/Three3d/XrVr'

function Three3D() {
  return (
    <div>
      <Top3dWork/>
      <ThreeDdesign/>
      <Three3danimation/>
      <ProductVisual/>
      <ProductPreview/>
      <ProductConfigurator/>
      <XrVr/>
    </div>
  )
}

export default Three3D