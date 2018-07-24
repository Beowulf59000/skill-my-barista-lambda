import { EXIT_MESSAGES } from "../Constants";
import { CANCEL_INTENT, LilaIntentHandler } from 'skill-lilasoft-toolkit';

export default class CancelIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(CANCEL_INTENT, EXIT_MESSAGES);
    }
};