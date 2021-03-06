import { RequestEnvelope } from 'ask-sdk-model';

const jsonRequest = 
{
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
        "type": "IntentRequest",
        "requestId": "amzn1.echo-api.request.12345",
        "timestamp": "2018-07-05T08:11:35Z",
        "locale": "fr-FR",
		"intent": {
			"name": "AMAZON.CancelIntent",
			"confirmationStatus": "NONE"
		}
    }
};

const cancelIntentRequest: RequestEnvelope = <RequestEnvelope>jsonRequest;
export default cancelIntentRequest;