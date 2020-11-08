# Terra Track

### Parcel Tracking App built with ReactJS

Terra Track was built as a proof of concept using modern React functional components instead of classes to implement a fully functioning light-weight app.

Instead of using the Context API to manage global state, Recoil was used instead.

Cross app themeing is managed by a theme-provider from the Styled Components library.

As the app reads data from an API that supplies amongst other things, geographical co-ordinates, the opportunity was used to implement the Google Maps API to read and render actual map locations.

## Demo:

The site demo can be reached at **https://terra-track.web.app/**

## Installation:

A `git clone` followed by an `npm install` will get you up and running. **However**, you will need to add a Google Maps API key to the `.env` file, along with an API serving the required JSON objects. You can set one up using any of the JSON mock-data providers.

Your object API needs to serve objects with the following structure:  
`{ "id": "6443", "status": "delivered", "eta": "2020-09-02T12:25:19Z", "parcel_id": "6351", "sender": "Avamm", "verification_required": false, "location_id": "FI54 3085 7542 6442 13", "location_name": "Maryland", "location_coordinate_latitude": 11.7072355, "location_coordinate_longitude": 11.0824912, "location_status_ok": true, "user_phone": "+46 729478015", "user_name": "Jhon Doe", "notes": "some random note", "last_updated": "2020-09-15T23:23:26Z" }`

## Component Diagram and Screenshots.

![](https://github.com/pXius/parcel-track/blob/master/src/diagrams/Component%20Diagram.png?raw=true)

## Screenshots

![](https://i.imgur.com/1y1RsAR.png)

![](https://i.imgur.com/WXhoONV.png)

![](https://i.imgur.com/kt3RIbb.png)
