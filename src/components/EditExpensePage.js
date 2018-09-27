import React from 'react';

const EditExpensePage = (props) => (
  <div>
    This is the number {props.match.params.id} component!
  </div>
);

export default EditExpensePage;