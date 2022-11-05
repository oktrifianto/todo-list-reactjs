import { useParams } from "react-router-dom";
import ListItemImage from '../../Assets/Images/item.png';

export default function ListItem(){
  const { id } = useParams();
  return (
    <div>
      <h1>Hehehe List Item Number : { id }</h1>
      <img src={ListItemImage} alt="listitem" />
    </div>
  );
}
