// const colors = ['#7a5195', '#bc5090','#ef5675'];

export default function Indicator({priority}){
  // belum jadi...
  // internet mati
  // let color = '#ed4c5c';
  // if (priority === 'very-high') { color = '#ed4c5c'};
  // if (priority === 'high') color = '#f8a541';
  // if (priority === 'normal') color = '#00a790';
  // let color = "#00a790";

  // const warna = 'f8a541';
  // const colorClass = 'inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold bg-[' + warna + '] rounded-full';
  // let color;
  // if (priority === 'very-high') { 
  //   color = 'inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold bg-[#ed4c5c] rounded-full'; 
  // } else if (priority === 'high') {
  //   color = 'inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold bg-[#f8a541] rounded-full';
  // } else if (priority === 'normal') color = 'inline-flex items-center p-[7px] mr-4 ml-3 text-sm font-semibold bg-[#00a790] rounded-full';

  let color;
  if (priority === 'very-high'){
    color = '#ed4c5c';
  } else if (priority === 'high'){
    color = '#444';
  } else if (priority === 'normal'){
    color = '#00a790';
  } else if (priority === 'low') {
    color = '#428bc1';
  } else {
    color = '#8942c1';
  }

  return (
    <>
      <span className={color}></span>
      <p className={`bg-[${color}]`}>Ehe</p>
    </>
  );
}
