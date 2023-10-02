import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = (props) => {
    const { images, isLoading } = useFetchGifs(props.category);
    /*
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(props.category);
        setImages(newImages);
    }

    useEffect(() => {
        //getGifs(props.category).then(newImages => setImages(newImages));
        getImages();
    }, []);
    */

    return (
        <>
            <h3>{props.category}</h3>
            <div className="card-grid">
                {images.map((item) => 
                    (<GifItem key={item.id} item={item}/>)
                )}
            </div>
        </>
    );
}