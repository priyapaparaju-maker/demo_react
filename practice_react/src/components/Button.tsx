type ButtonProps ={
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


export const Button =(Props: ButtonProps) => {
    return (
        <button onClick ={(event) =>Props.handleClick(event, 3)}>Click</button>
    )
}
