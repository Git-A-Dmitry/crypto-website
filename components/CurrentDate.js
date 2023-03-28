const CurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const initialDate = day + '.' + month + '.' + year;

  return (
    <div>
      <h2 className='date'>{initialDate}</h2>
    </div>
  );
};

export default CurrentDate;
