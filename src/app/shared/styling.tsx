import Image from "next/image"


interface styling{
    name : string,
    price :string,
    images :string
}

const stylingCart: React.FC<styling> = ({name, price, images}) => (
<div>
    <Image src={images} alt={name} width={500} height={300}></Image>
    <h2>{name}</h2>
    <h2>{price}</h2>
</div>
)

export default stylingCart