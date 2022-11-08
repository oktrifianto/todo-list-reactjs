import ListItemImage from '../../Assets/Images/item.png';

export default function EmptyListItem(){
  return (
    <div className="item-content">
      <div className="empty-item flex justify-center" data-cy="todo-empty-state">
        <img src={ListItemImage} alt="listitem" />
      </div>
    </div>
  );
}
