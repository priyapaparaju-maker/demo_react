import React from "react"

type ContainerProps ={
    styles: React.CSSProperties
    }


export const Container =(Props: ContainerProps) =>{
    
    return (
        <div style={Props.styles}>
          Text goes here
        </div>
    )

}