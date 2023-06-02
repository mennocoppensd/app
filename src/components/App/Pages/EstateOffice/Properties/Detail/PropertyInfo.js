import { useNavigate } from "react-router-dom";
import Button from "../../../../../Design/Button/Button";
import { formatName } from "../../../../../../core/modules/properties/utils";

const PropertyInfo = ({ property }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };
  return (
    <div>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={property.image} alt={property.title} />
        <h1>{formatName(property)}</h1>
        <p>{property.title}</p>
        <p>{property.squareMeters}</p>
        <p>{property.estateOffice}</p>
      </div>
    </div>
  );
};

export default PropertyInfo;
