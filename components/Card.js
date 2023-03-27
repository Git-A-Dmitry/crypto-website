const Card = (props) => {
  const { icon, heading, text } = props;

  return (
    <div>
      <div className='card__icon-wrapper'>
        <div className='card__icon'>{icon}</div>
        <h3>{heading}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
