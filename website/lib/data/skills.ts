import { Skill } from '../types'

export const skills: Skill[] = [
  // Software
  { name: 'SketchUp', category: 'Software', proficiency: 5 },
  { name: 'V-Ray', category: 'Software', proficiency: 5 },
  { name: 'AutoCAD', category: 'Software', proficiency: 5 },
  { name: '3ds Max', category: 'Software', proficiency: 4 },
  { name: 'Revit', category: 'Software', proficiency: 3 },
  { name: 'Adobe Photoshop', category: 'Software', proficiency: 4 },
  { name: 'Adobe Illustrator', category: 'Software', proficiency: 4 },
  { name: 'Enscape', category: 'Software', proficiency: 4 },

  // Design
  { name: 'Space Planning', category: 'Design', proficiency: 5 },
  { name: 'Concept Development', category: 'Design', proficiency: 5 },
  { name: 'Material Selection', category: 'Design', proficiency: 5 },
  { name: 'FF&E Specification', category: 'Design', proficiency: 4 },
  { name: 'Lighting Design', category: 'Design', proficiency: 4 },
  { name: 'Colour Theory', category: 'Design', proficiency: 5 },

  // Technical
  { name: 'Construction Drawings', category: 'Technical', proficiency: 5 },
  { name: '3D Visualization', category: 'Technical', proficiency: 5 },
  { name: 'Project Coordination', category: 'Technical', proficiency: 4 },
  { name: 'Site Supervision', category: 'Technical', proficiency: 4 },
  { name: 'Building Codes', category: 'Technical', proficiency: 4 },

  // Soft Skills
  { name: 'Client Relations', category: 'Soft Skills', proficiency: 5 },
  { name: 'Team Leadership', category: 'Soft Skills', proficiency: 4 },
  { name: 'Presentation', category: 'Soft Skills', proficiency: 5 },
  { name: 'Problem Solving', category: 'Soft Skills', proficiency: 5 },
]

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((s) => s.category === category)
}

export const skillCategories = ['Software', 'Design', 'Technical', 'Soft Skills'] as const
