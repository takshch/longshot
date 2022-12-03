import React from 'react';
import classes from './Card.module.scss';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className={classes['card']}>{children}</div>
);

export default Card;
