# pingToken ♥️ Express

The CSx91 Exercise4-Pilot codespace built on the GH Express template.

This app demonstrates simple ping-ing between two browser clients over the Web, with state between them maintained on a Node/Express server.
In production, the clients will be indentified by different usernames on separate machines (desktops, tablets, phones). For ease of testing, the clients also may be different browsers (Chrome, Edge, Firefox, Safari) for the same username on a single machine.

The app runs automatically at startup of the codespace, which has a default active-time of 30 min.

Instructions:
1. Start the app on two browsers/machines; one of them will enable the [Ping] button initially
2. Press [Ping] in the browser where it is enabled; the button will then be disabled awaiting a response from other party
3. Press [Poll] in the other browser to check if a ping was sent; when it is [Ping] there will be re-enabled
4. Similarly, press [Poll] in the first browser to check if its ping was replied; then its [Ping] will be re-enabled
5. After 5 attempts to pickup a ping from the opposite party, polling is paused; press [Poll] to re-initiate a new poll

```
npm start
```
