type InputBoxProps ={
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputBox =(props: InputBoxProps) =>{
    return(
        <div>
            <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange} // Pass the onChange handler
      />
        </div>
    )
}