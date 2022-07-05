import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AnimalContainer from '../../../AccountPage/AdminLandingPage/Containers/AnimalAdmin/AnimalContainer/AnimalContainer'

const OrgApplicationContainer = ( {animals}) => {
  return (
    <>
        <section className="olp__sectionContainer">
            <div className="olp__headerElementCont">
                <h3>Applications</h3>
                <span>All Applications <FontAwesomeIcon icon={faSquareArrowUpRight} /></span>
            </div>
            
            <div className="olp__cardContainers">
            {
                animals.slice(0, 3).map((animal, index) => {
                return <AnimalContainer key={index}
                                        id={animal.id}
                                        organisationId={animal.organisation_id}
                                        name={animal.name}
                                        age={animal.age}
                                        reserved={animal.reserved}
                                        adopted={animal.adopted}
                                        breed={animal.breed}
                                        location={animal.location}
                                        // animals={animals}
                                        // setAnimals={setAnimals}
                                        />
                })
            }
            </div>
        </section>
    </>
  )
}

export default OrgApplicationContainer