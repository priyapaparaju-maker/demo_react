type InputProps ={
    value: string
    
}
export const Input = (Props: InputProps) =>{
   const  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }   

   
    return <input type='text' value={Props.value} onChange={handleChange}/>
}