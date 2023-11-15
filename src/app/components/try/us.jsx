import React from "react";
import styles from "../../styles/us.module.scss";



const Us = () => {
  return (
    <article className="row  m-4">
      <section className="col-6 p-2 ps-0  ">
        <div className="rounded p-2" id={styles.us}>
          <h2 className="text-center">Om os</h2>
          <p className="ps-1">
            Klimapyramiden er et informationscenter og mødested for folk, der er
            interesserede i bæredygtighed og grøn energi. Vi er dedikerede til
            at fremme bæredygtig udvikling og en grønnere fremtid.
          </p>
          <hr />

          <h5 className="text-center">
            <strong>Vores aktiviteter</strong>
          </h5>
          <p className="ps-1">
            Vi tilbyder en bred vifte af aktiviteter og arrangementer, der
            fokuserer på bæredygtighed. Her er nogle eksempler:
          </p>
          <ul className="ps-3">
            <li>
              Foredrag og workshops om grøn energi, klimaforandringer og andre
              bæredygtighedsrelaterede emner.
            </li>
            <li>
              Udstillinger om Rønde bys historie og kultur, med fokus på
              bæredygtige aspekter.
            </li>
            <li>Oplysningskampagner om bæredygtige vaner og adfærd.</li>
            <li>
              Møder og arrangementer for folk, der er interesserede i
              bæredygtighed.
            </li>
          </ul>
          <hr />
          <h5 className="text-center">
            <strong>Vores fællesskab</strong>
          </h5>
          <p >
            Vi ønsker at skabe et fællesskab for folk, der er interesserede i
            bæredygtighed. Vi vil give folk en platform til at dele deres ideer
            og erfaringer, og vi vil hjælpe folk med at finde ressourcer og
            støtte til at leve et mere bæredygtigt liv.
          </p>
        </div>
      </section>
      <section className="col-6 p-2 pe-0">
        <div className="rounded p-2" id={styles.us}>
          <h2 className="text-center">Vores mission</h2>
          <p className="ps-1">
            Vores mission er at gøre bæredygtighed tilgængelig og forståelig for
            alle. Vi vil inspirere og motivere folk til at leve mere bæredygtigt
            og til at gøre en forskel for miljøet.
            </p>
            <hr />
            <p className="mt-2 ms-1">
              <strong>Vi vil opnå vores mission ved at:</strong>
            </p>
            <ul className="ps-3">
              <li>
                Uddanne folk om bæredygtighed på en engagerende og interaktiv
                måde. Vi vil bruge en bred vifte af medier og formater til at
                gøre bæredygtighed forståelig for alle, uanset alder eller
                baggrund.
              </li>
              <li className="mt-4">
                Inspirere folk til at leve mere bæredygtigt ved at give dem
                konkrete eksempler og løsninger. Vi vil vise folk, hvordan de
                kan gøre en forskel i deres eget liv, og vi vil give dem de
                ressourcer, de har brug for til at leve et mere bæredygtigt liv.
              </li>
              <li className="mt-4">
              Skabe partnerskaber med andre organisationer, der arbejder for en grønnere fremtid. Vi tror på, at vi kan opnå mere sammen end hver for sig. Vi vil samarbejde med andre organisationer for at udbrede kendskabet til bæredygtighed og for at fremme en grønnere fremtid.
              </li>
            </ul>
            <hr />
         <p className="ps-1">Vi tror på, at alle kan gøre en forskel. Vi vil arbejde for at gøre bæredygtighed tilgængelig og forståelig for alle, så vi sammen kan skabe en grønnere fremtid.</p>
           
         
        </div>
      
      </section>
    </article>
  );
};

export default Us;
