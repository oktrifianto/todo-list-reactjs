export default function Indicator({priority}){
  return <span className={`inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold rounded-full`} style={{ backgroundColor: `${priority === 'very-high' ? '#ed4c5c' : priority === 'high' ? '#f8a541' : priority === 'normal' ? '#00a790' : priority === 'low' ? '#428bc1' : priority === 'very-low' ? '#8942c1' : '' }`}}></span>;
}
