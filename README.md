### How to get it running:
> npm install -g cordova ionic

> npm install

> ionic serve

### Setting up push notifications:
Instructions I followed for firebase:

https://firebase.google.com/docs/android/setup (including bits at bottom)

### To send a push notification from Ionic Cloud
When app loads, the device is registered with Ionic Cloud. See app.component.ts
To get a copy of the device ID, I have a textarea in the menu. Copy the text in here. This is the device id.
Using POSTMAN, do the following:

- POST to this URL: https://api.ionic.io/push/notifications
- Headers:
    - Content-Type: 'application/json'
    - Authorization: 'Bearer %key%'
    (the key is generated in my Ionic Cloud account. You can create one yourself there using your own Ionic Cloud account if you so desire)
Body:
    - Using 'raw' data type: Paste this:
        
            {
                "tokens": [" %deviceId% "],
                "profile": "novartis",
                "notification": {
                    "message": "Blah blah"
                }
            }

    ...get the device id from the push registration in app.component.ts

