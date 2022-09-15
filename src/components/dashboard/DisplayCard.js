import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const DisplayCard = ({ bg, icon, subtitle, errors, cycles, totalunits }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${bg}`}>
            <i className={icon} />
          </div>
          <div className="ms-3">
          <h5 className="mb-0 font-weight-bold">{subtitle}</h5>
            
            <medium className="text-muted">{errors}</medium>
            <br />
            <medium className="text-muted">{cycles}</medium>
            <br />
            <medium className="text-muted">{totalunits}</medium> 
            <br />
            <br />
            
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

DisplayCard.propTypes = {
  bg: PropTypes.string,
  icon: PropTypes.string,
  subtitle: PropTypes.string,
  errors: PropTypes.string,
  cycles: PropTypes.string,
  totalunits: PropTypes.string,
  
};

export default DisplayCard;
