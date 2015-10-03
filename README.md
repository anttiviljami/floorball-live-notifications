![Floorball.fi Live Notifications](/assets/images/cover.jpg)
# Floorball.fi Live Notifications

A live result tracker bot that polls the [floorball.fi](http://floorball.fi/) REST API and can be configured to send notifications via [Pushover](https://pushover.net/) (or other services) for events.

## Installation and usage

Get a [Pushover](https://pushover.net/) account and install the app on your mobile device.

Clone this repository and run npm install

```
git clone https://github.com/anttiviljami/floorball-live-notifications.git
cd floorball-live-notifications
npm install
```

Copy and edit the `.env.example` file to `.env` in the project directory to configure the app. You will also need to copy your Pushover credentials here in order for the mobile notifications to work.

```
cp .env.example .env && vim .env
```

To run, simply
```
./start
```

Or run in a production environment (with forever):
```
forever start start.js
```

## Screenshot

![iPhone screenshot](/assets/images/screenshot1.png)

## Development

Code style requirements for this project are included in the `.jshintrc` file.

To run jshint automatically:

```
gulp lint
```

## TODO

- simpler setup (maybe interactive config creation ?)
