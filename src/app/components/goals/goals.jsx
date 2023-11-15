import React from 'react'
import styles from '../../styles/goals.module.scss'

import image1 from '../../../../public/assets/me.webp'
import image2 from '../../../../public/assets/mo.webp'
import image3 from '../../../../public/assets/mb.webp'
import image4 from '../../../../public/assets/bla.jpeg'



import Image from 'next/image';



const goals = () => {
  return (
    <div id='goals'>
    <div className="m-4 rounded p-4" id={styles.goals}>
        <h2 className='text-center'>Vores mål</h2>
        <article className='row text-center mt-5'>
            <section className="col-3">
                <Image className='img-fluid rounded' src={image1} alt="et" />
                <figcaption>et eller andet</figcaption>

            </section>
            <section className="col-3">
            <Image className='img-fluid rounded' src={image2} alt="et" />
            <figcaption>grønnere liv</figcaption>
               
            </section>
            <section className="col-3">
            <Image className='img-fluid rounded ' src={image3} alt="et" />
            <figcaption>Mere jord</figcaption>
                
            </section>
            <section className="col-3">
            <Image className='img-fluid rounded' src={image4} alt="et" />
                <figcaption>Mere sol</figcaption>
            </section>
        </article>
    </div>
    </div>
  )
}

export default goals