import React from 'react';
import { Link } from 'react-router-dom';

type Props = {}
const Welcome = (props: Props) => {
  return (
    <div>
        <p>Welcome!</p>
        <Link to="/">To Home</Link>
    </div>
  )
}
export default Welcome