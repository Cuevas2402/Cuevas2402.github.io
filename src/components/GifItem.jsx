
export const GifItem = (props) => {
    
    return (
        <div className="card">
            <img src={props.item.url} alt={props.item.title} />
            <p>{props.item.title}</p>
        </div>
    );
}