import { EXIT_MESSAGES } from "../Constants";
import { LilaIntentHandler, STOP_INTENT } from "skill-lilasoft-toolkit";

export default class StopIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(STOP_INTENT, EXIT_MESSAGES);
    }
};