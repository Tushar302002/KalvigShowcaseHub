import React from 'react'
import TopcaseStudies from '../components/CaseStudies/TopcaseStudies'
import SectionDivision_Version1 from '../components/SectionDivision/SectionDivision_Version1'
import GameArts from '../components/CaseStudies/GameArts'
import LevelDesign from '../components/CaseStudies/LevelDesign'
import GameDesign from '../components/CaseStudies/GameDesign'
import GameDev from '../components/CaseStudies/GameDev'

function CaseStudies() {
  return (
    <div>
    <TopcaseStudies/>
    <SectionDivision_Version1/>
    <GameArts/>
    <SectionDivision_Version1/>
    <LevelDesign/>
    <SectionDivision_Version1/>
    <GameDesign/>
    <SectionDivision_Version1/>
    <GameDev/>
    </div>
  )
}

export default CaseStudies