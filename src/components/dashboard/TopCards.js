import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const TopCards = ({ bg, icon, location, subtitle, address, phone, operator, errors }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${bg}`}>
            <i className={icon} />
          </div>
          <div className="ms-3">
          <small className="text-muted">{subtitle}</small>
            <br />
            <h5 className="mb-0 font-weight-bold">{location}</h5>
           
            <medium className="text-muted">{address}</medium>
            <br />
            <medium className="text-muted">{phone}</medium>
            <br />
            <medium className="text-muted">{operator}</medium>
           
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

TopCards.propTypes = {
  bg: PropTypes.string,
  icon: PropTypes.any,
  location: PropTypes.any,
  subtitle: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  operator: PropTypes.string,
  
};

export default TopCards;
