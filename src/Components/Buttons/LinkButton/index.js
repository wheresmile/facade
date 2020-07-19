import React from 'react';
import {Fragment} from 'react';
import { Link } from 'react-router-dom';

import Button from 'Components/Buttons/Button';

class LinkButton extends React.Component {
  render() {
    const {
      link,
      description,
    } = this.props;

    return (
      <Fragment>
        <Link to={link}>
          <Button type='outline' fullWidth noUppercase>
            {description}
          </Button>
        </Link>
      </Fragment>
    );
  }
}

LinkButton.defaultProps = {
  link: "/",
  description: "今日"
};

export default LinkButton;