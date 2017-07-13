This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### Setting up push notifications:
Instructions I followed for firebase
https://firebase.google.com/docs/android/setup (including bits at bottom)

Setting up the app to connect to marketing cloud
http://salesforce-marketingcloud.github.io/JB4A-SDK-Android/create-apps/create-apps-overview.html

### To send a push notification from Ionic Cloud
When app loads, the device is registered with Ionic Cloud. See app.component.ts
To get a copy of the device ID, I have a textarea in the menu. Copy the text in here. This is the device id.
Using POSTMAN, do the following:
- POST to this URL: https://api.ionic.io/push/notifications
- Headers:
    - Content-Type: 'application/json'
    - Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTViNWM4My1jYWNkLTQ3OWUtODNmMi00ODY3ZGNiOTU2OTMifQ.VsN5EDN5XsDUJgPTWsIjspCM5dcMJtCeKh0XHVmy6Zw'
    (this key is generated in my Ionic Cloud account. You can create one yourself there using your own Ionic Cloud account if you so desire)
Body:
    - Using 'raw' data type: Paste this:
        {
            "tokens": ["eHbyllmgAt4:APA91bEfVDrqMb-lGiLn-U0reIgGYgLeD-mKduSE0zHzayZkgbQkGnTJAbGOuNYiwE5p3WImdVv-pcQ1_XpKqJ2_TQj7iXDBmKHYGsAhG3O0gRbOYNPXu6susbB764_O9-zuHBal1HfW"],
            "profile": "novartis",
            "notification": {
                "message": "Blah blah"
            }
        }
    ...where the string in 'tokens' is the device ID

