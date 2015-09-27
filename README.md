# Floorball.fi Live Notifications

A live result tracker bot that polls the floorball.fi REST API and can be configured to send notifications via Pushover (or other services) for events.

## Installation and usage

Clone this repository and run npm install

```
git clone https://github.com/anttiviljami/floorball-live-notifications.git
cd floorball-live-notifications
npm install
```

To run, simply
```
./start
```

## TODO

- Choose single teams' games to follow
- Add notifications for period starts
- Add notifications for penalties
- Add notifications for team timeouts
- What happens if there's overtime ?
- Game end and end of 3rd period shouldn't both reported ?

