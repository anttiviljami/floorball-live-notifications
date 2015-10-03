![Floorball.fi Live Notifications](https://raw.githubusercontent.com/suvisannisofia/floorball-live-notifications/master/assets/images/cover.jpg)

# Floorball.fi Live Notifications

A live result tracker bot that polls the floorball.fi REST API and can be configured to send notifications via Pushover (or other services) for events.

## Installation and usage

Clone this repository and run npm install

```
git clone https://github.com/anttiviljami/floorball-live-notifications.git
cd floorball-live-notifications
npm install
```

Copy and edit the .env.example file to .env in the project directory

To run, simply
```
./start
```

## Development

Code style requirements for this project are included in the `.jshintrc` file.

To run jshint automatically:

```
gulp lint
```

## TODO

- simpler setup (maybe interactive config creation ?)
