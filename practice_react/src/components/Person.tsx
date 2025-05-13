type PersonType = {
   name: { 
    firstName: string
    lastName: string
   }
}

const Person = (per: PersonType) =>{
return(
    <div> 
        <h2> {per.name.firstName} {per.name.lastName}</h2>
    </div>
)


}

export default Person;