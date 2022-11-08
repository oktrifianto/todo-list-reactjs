// const colors = ['#7a5195', '#bc5090','#ef5675'];

export default function Indicator({priority}){
  let color;
  if (priority === 'very-high') color = '#ed4c5c';
  if (priority === 'high') color = '#f8a541';
  if (priority === 'normal') color = '#00a790';
  if (priority === 'low') color = '#428bc1';
  if (priority === 'very-low') color = '#8942c1';

  return (
    <span className={`inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold bg-[${color}] rounded-full`}></span>
  );
}
