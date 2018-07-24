import { WELCOME_MESSAGES, WELCOME_REPROMPTS, SKILL_NAME } from "../Constants";
import { LilaRequestHandler, LAUNCH_REQUEST } from "skill-lilasoft-toolkit";

export default class LaunchRequestHandler extends LilaRequestHandler {
    constructor() {
        super(LAUNCH_REQUEST, WELCOME_MESSAGES, WELCOME_REPROMPTS);
    }
};