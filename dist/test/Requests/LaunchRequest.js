"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonRequest = {
    "version": "1.0",
    "session": {
        "new": true,
        "sessionId": "amzn1.echo-api.session.12345",
        "application": {
            "applicationId": "amzn1.ask.skill.12345"
        },
        "user": {
            "userId": "amzn1.ask.account.12345"
        }
    },
    "context": {
        "System": {
            "application": {
                "applicationId": "amzn1.ask.skill.12345"
            },
            "user": {
                "userId": "amzn1.ask.account.12345"
            },
            "device": {
                "supportedInterfaces": {}
            }
        }
    },
    "request": {
        "type": "LaunchRequest",
        "requestId": "amzn1.echo-api.request.12345",
        "timestamp": "2018-07-05T08:11:35Z",
        "locale": "fr-FR"
    }
};
const launchRequest = jsonRequest;
exports.default = launchRequest;
//# sourceMappingURL=LaunchRequest.js.map