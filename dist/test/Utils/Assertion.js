'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
class Assertion {
    checkResponseStructure(response) {
        chai_1.expect(response).to.have.property("version");
        chai_1.expect(response.version).to.be.equal("1.0");
        chai_1.expect(response).to.have.property("response");
    }
    checkOutputSpeech(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.match(/^<speak>/); // startWith('<speak>');
        chai_1.expect(os.ssml).to.match(/<\/speak>$/); //.endWith('</speak>');
    }
    checkOutputSpeachContains(response, text) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.contains(text);
        chai_1.expect(os.ssml).to.match(/^<speak>/); // startWith('<speak>');
        chai_1.expect(os.ssml).to.match(/<\/speak>$/); //.endWith('</speak>');
    }
    checkOutputSpeechContainsList(response, texts) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        let regexp = /^<speak>(.+?)<\/speak>$/;
        let speechWithoutSsml = regexp.exec(os.ssml)[1];
        console.log('speechWithoutSsml: ' + speechWithoutSsml);
        chai_1.expect(texts).to.contains(speechWithoutSsml);
        chai_1.expect(os.ssml).to.match(/^<speak>/); // startWith('<speak>');
        chai_1.expect(os.ssml).to.match(/<\/speak>$/); //.endWith('</speak>');
    }
    checkOutputSpeachDoesNotContains(response, text) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.not.contains(text);
        chai_1.expect(os.ssml).to.match(/^<speak>/); // startWith('<speak>');
        chai_1.expect(os.ssml).to.match(/<\/speak>$/); //.endWith('</speak>');
    }
    checkSessionStatus(response, shouldEndSession) {
        let r = response.response;
        chai_1.expect(r).to.have.property("shouldEndSession");
        if (shouldEndSession) {
            chai_1.expect(r.shouldEndSession).to.be.true;
        }
        else {
            chai_1.expect(r.shouldEndSession).to.be.false;
        }
    }
    checkStandardCard(response) {
        let r = response.response;
        chai_1.expect(r).to.have.property("card");
        chai_1.expect(r.card.type).to.equal('Standard');
        chai_1.expect(r.card.text).to.not.be.equal('');
        chai_1.expect(r.card.title).to.not.be.equal('');
    }
    checkReprompt(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("reprompt");
        chai_1.expect(r.reprompt).to.have.property("outputSpeech");
        chai_1.expect(r.reprompt.outputSpeech).to.have.property("type");
        chai_1.expect(r.reprompt.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.reprompt.outputSpeech).to.have.property("ssml");
        let os = r.reprompt.outputSpeech;
        chai_1.expect(os.ssml).to.match(/^<speak>/); // startWith('<speak>');
        chai_1.expect(os.ssml).to.match(/<\/speak>$/); //.endWith('</speak>');
    }
    checkNoReprompt(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.not.have.property("reprompt");
    }
    checkAudioPlayDirective(response) {
        let r = response.response;
        chai_1.expect(r).to.have.property("directives");
        chai_1.expect(r.directives).to.have.lengthOf(1);
        let d = r.directives[0];
        chai_1.expect(d).to.have.property("type");
        chai_1.expect(d.type).to.equal("AudioPlayer.Play");
        let app = d;
        chai_1.expect(app).to.have.property("playBehavior");
        chai_1.expect(app.playBehavior).to.be.equal("REPLACE_ALL");
        chai_1.expect(app).to.have.property("audioItem");
        chai_1.expect(app.audioItem).to.have.property("stream");
        chai_1.expect(app.audioItem.stream).to.have.property("url");
        chai_1.expect(app.audioItem.stream.url).to.match(/^https:\/\//);
        chai_1.expect(app.audioItem.stream).to.have.property("token");
        chai_1.expect(app.audioItem.stream).not.to.have.property("expectedPreviousToken");
        chai_1.expect(app.audioItem.stream).to.have.property("offsetInMilliseconds");
        chai_1.expect(app.audioItem.stream.offsetInMilliseconds).to.equal(0);
    }
}
exports.default = Assertion;
//# sourceMappingURL=Assertion.js.map