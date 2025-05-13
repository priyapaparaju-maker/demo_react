type GreetProps = {
    name: string
    count: number
    isLoggedIn: boolean
}

export const Greet: React.FC<GreetProps> = (props: GreetProps) => {
    const {count=0} = props
    return (
        <div>
         <h2>{props.isLoggedIn? `'Welcome' ${props.name}! "You have" ${props.count} " unread messages"`: ''} </h2>
        </div>
    )
    }

