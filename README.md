# Segment Integration - Syncano Socket

In this socket the Segment.io integration is provided. You can use two endpoints. First endpoint allows to identify user on Segment.io and the second - send user behaviour (event) to Segment.io

### Avaliable Socket methods:

- `GET` - `identify_user` - Identifying user on Segment.io ( required parameter: `userID`)
- `POST` - `send_event` - Sending information about user event to Segment.io ( required parameters: `userID` and `event`)

License
----
MIT