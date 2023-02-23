import React from 'react'

export default function MuscleStrength({targetElement}){
        
    return(
        <>
            <p>{targetElement.title}</p>
        </>
    )
}



export async function getStaticPaths(){
    const data = await import ("/data/data.json") 
    const allPaths=data && data.muscle.map(el=>{
        return {
                params:{
                    cat:`/muscle/${el.title}`
                }
        }
    })
    return{
        paths:allPaths,
        fallback:true
    }
}

export async function getStaticProps(context){
    const targetTitle=context.params.cat;
    const data = await import ("/data/data.json") 

    const targetElement=data.muscle.find(el=>el.title===targetTitle);

    return {
        props:{
            targetElement
        }
    }

}
