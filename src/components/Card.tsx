import * as React from 'react';

interface CardStatelessProps {
  name: string,
  email: string,
  id: number
}
const Card: React.SFC<CardStatelessProps> = (props) => {
  const { id, name, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
