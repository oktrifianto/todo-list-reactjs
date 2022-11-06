import ListItemImage from '../../Assets/Images/item.png';

export default function EmptyListItem(){
  return (
    <div className="item-content">
      <div className="empty-item flex justify-center">
        <img src={ListItemImage} alt="listitem" />
      </div>
    </div>
  );
}
