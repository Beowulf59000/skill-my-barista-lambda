import { LilaRequestHandler, SESSION_ENDED_REQUEST } from "skill-lilasoft-toolkit";

export default class SessionEndedRequestLauncher extends LilaRequestHandler {   
    constructor() {
        super(SESSION_ENDED_REQUEST);
    }
};