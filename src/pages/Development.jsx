import React from 'react'
import TopDevelopment from '../components/Development/TopDevelopment'
import Three3Ddev from '../components/Development/Three3Ddev'
import AppDev from '../components/Development/AppDev'
import WebDev from '../components/Development/WebDev'
import SectionDivision_Version1 from '../components/SectionDivision/SectionDivision_Version1'

function Development() {
  return (
    <div>
      <TopDevelopment/>
      <SectionDivision_Version1/>
      <Three3Ddev/>
      <SectionDivision_Version1/>
      <AppDev/>
      <SectionDivision_Version1/>
      <WebDev/>
    </div>
  )
}

export default Development