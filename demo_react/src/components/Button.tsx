type ButtonProps = {
    name?: string;
    handleClick?: () => void; 
}

export const Button = (props: ButtonProps)=>{
    return(
        <button name={props.name} onClick={props.handleClick}>{props.name}</button>
    )
}