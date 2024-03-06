import GoogleMapReact from "google-map-react";
import { FaLocationDot } from "react-icons/fa6";

import Card from "react-bootstrap/Card";
import { Rating } from "@mui/material";

const LocationCard = ({ place }) => (
  <Card style={{ width: "8rem" }}>
    <Card.Img
      variant="top"
      src={
        place.photo
          ? place.photo.images.large.url
          : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
      }
    />
    <Card.Body className="flex flex-col">
      <Card.Text className="text-xxs">{place.name}</Card.Text>
      <Rating size="small" value={Number(place.rating)} />
    </Card.Body>
  </Card>
);

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setchildClicked,
}) {
  return (
    <div className="w-full h-full">
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          key={JSON.stringify(places)} // Unique key based on places data
          bootstrapURLKeys={{ key: "AIzaSyD1xqZ18HQU9wy1vEiNDjvEhq2UQOg8ww8" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={15}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: "",
          }}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child) => setchildClicked(child)}
        >
          {places?.map((place, i) =>
            Number(place.latitude) && Number(place.longitude) ? (
              <div
                className="map-marker"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                <FaLocationDot fontSize={30} />
                <LocationCard place={place} />
              </div>
            ) : null
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}
