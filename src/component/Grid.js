
const Grid = () => {

    const images = [
        "https://picsum.photos/id/1/800/600",
        "https://picsum.photos/id/2/800/600",
        "https://picsum.photos/id/3/800/600",
        "https://picsum.photos/id/4/800/600",
        "https://picsum.photos/id/5/800/600",
        "https://picsum.photos/id/6/800/600",
        "https://picsum.photos/id/7/800/600",
        "https://picsum.photos/id/8/800/600",
        "https://picsum.photos/id/9/800/600",
        "https://picsum.photos/id/10/800/600",
        "https://picsum.photos/id/11/800/600",
        "https://picsum.photos/id/12/800/600",
        "https://picsum.photos/id/13/800/600",
        "https://picsum.photos/id/14/800/600",
        "https://picsum.photos/id/15/800/600",
        "https://picsum.photos/id/16/800/600",
    ]
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 w-full md:gap-2 gap-1 pb-16">
            {images.map((img,index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img src={img} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" alt="picsum" />
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
            </div>

            ))}
        </div>
    )
}

export default Grid;