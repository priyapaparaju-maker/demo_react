type LinkProps = {
    name?: string;
    href?: string;

}

export const Link=(props: LinkProps) =>{
    return (
        <div>
            <a href={props.href} style={{textDecoration: 'none', color: 'blue'}} >{props.name}</a>
        </div>
    )
}