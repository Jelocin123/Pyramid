import React from 'react'
import styles from '../../styles/about.module.scss'

const aboutUs = () => {
  return (
    <div id=''>
    <div className=" m-4 rounded p-4 " id={styles.about}>
      <h2 className='text-center'>Om os</h2>
      <p>
        Klimapyramiden er et varemærke for Rønne by, og vi er dedikerede til at fremme bæredygtighed og grøn energi. Vi er et informationscenter, hvor folk kan lære mere om Rønne og de mange muligheder for at leve et mere bæredygtigt liv.
      </p>
      <p>
        Vi tilbyder en bred vifte af aktiviteter og arrangementer, der fokuserer på bæredygtighed, herunder:
      </p>
      <ul>
        <li>Foredrag og workshops om grøn energi, klimaforandringer og andre bæredygtighedsrelaterede emner.</li>
        <li>Udstillinger om Rønne bys historie og kultur.</li>
        <li>Oplysningskampagner om bæredygtige vaner og adfærd.</li>
      </ul>
      <p>
        Vi er også et mødested for folk, der er interesserede i bæredygtighed. Vi tilbyder et fællesskab for folk, der kan dele deres ideer og erfaringer, og vi kan hjælpe folk med at finde ressourcer og støtte til at leve et mere bæredygtigt liv.
      </p>
    </div>
    </div>
  )
}

export default aboutUs;