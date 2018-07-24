import { HELP_REPROMPTS, HELP_MESSAGES } from "../Constants";
import { LilaIntentHandler, HELP_INTENT } from "skill-lilasoft-toolkit";

export default class HelpIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(HELP_INTENT, HELP_MESSAGES, HELP_REPROMPTS);
    }
};