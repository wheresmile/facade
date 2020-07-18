import React from 'react';
import {Fragment} from 'react';
import { Link } from 'react-router-dom';

import Button from 'Components/Button';

class NewButton extends React.Component {
  render() {

    return (
      <Fragment>
        <Link to={`/new_discussion`}>
          <Button type='outline' fullWidth noUppercase>
            新建
          </Button>
        </Link>
      </Fragment>
    );
  }
}

export default NewButton;