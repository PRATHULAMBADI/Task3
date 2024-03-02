
import React, {useState} from "react";
import monuments from "./monuments.json"



function Content (){

    const[monument, setMonument] = useState(monuments); 

    const filterMonuments =(currentMonumentContinent)=>{
        const updatedList = monuments.filter((currentMonument) => {
        return currentMonument.continent ===currentMonumentContinent;
        });

        setMonument(updatedList)
    }
    return(
            <>
                <div>
                    <div className='buttonContainer'>
                        <button className='buttonContinent' onClick={()=>setMonument(monuments)}>ALL</button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('Asia')}>ASIA  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('Africa')}>AFRICA  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('North America')}>NORTH AMERICA  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('South America')}>SOUTH AMERICA  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('Antarctica')}>ANTARCTICA  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('Europe')}>EUROPE  </button>
                        <button className='buttonContinent' onClick={()=>filterMonuments('Australia')}>AUSTRALIA  </button>
                    </div>                    
                </div>                
                <div className='tileContainer'>
                {
                    monument.map((list) =>{
                        const {id, name, country, image}= list;   
                        return(  
                            <div className='tileHolder' key={id}>
                                <img src={image} alt="image" />
                                <div className='nameHolder'>
                                    <div >{name}</div>
                                    <div>{country}</div>
                                </div>
                            </div>
                        )
                    })
                    
                }
                </div>
            </>
        )
}
export default Content