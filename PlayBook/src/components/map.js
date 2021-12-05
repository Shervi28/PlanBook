import React  from "react";
import { Button, Form, Card } from "react-bootstrap";
import L from "leaflet";
import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyBlsSNHy0Uh1DyMKyMr7TeEJeoBTqBxCt0',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });

// const db = getFirestore();

export default function bookMap() {
  var latitude, longitude;

//   var map = L.map("map", {
//     center: [latitude, longitude],
//     zoom: 13,
//   });

//   L.marker([latitude, longitude]).addTo(map);

//   var circle = L.circle([51.508, -0.11], {
//     color: "red",
//     fillColor: "#f03",
//     fillOpacity: 0.5,
//     radius: 20,
//   }).addTo(map);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Turf booked @</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Location: 16.24325, -7.40856
          </Card.Subtitle>
          <Card.Text>More Details: 8 people playing cricket</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Turf booked @</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Location: 16.24325, -7.40856
          </Card.Subtitle>
          <Card.Text>More Details: 5 people playing basketball</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Turf booked @</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Location: 16.24325, -7.40856
          </Card.Subtitle>
          <Card.Text>More Details: 8 people playing cricket</Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="Time" placeholder="What time do you book" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLoc">
          <Form.Label>Location(Latitude)</Form.Label>
          <Form.Control
            type="location"
            placeholder="Location of turf Latitude"
            value={latitude}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLoc2">
          <Form.Label>Location(Longitude)</Form.Label>
          <Form.Control
            type="location2"
            placeholder="Location of turf Latitude"
            value={longitude}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
