import channelDeleteEvent from "./channelDelete";
import guildCreateEvent from "./guildCreate";
import guildDeleteEvent from "./guildDelete";
import guildMemberRemoveEvent from "./guildMemberRemove";
import interactionCreateEvent from "./InteractionCreate";
import messageCreateEvent from "./messageCreate";
import readyEvent from "./ready";
import voiceStateUpdateEvent from "./voiceStateUpdate";

export const botEvents = [
    readyEvent,
    interactionCreateEvent,
    voiceStateUpdateEvent,
    guildCreateEvent,
    guildDeleteEvent,
    channelDeleteEvent,
    messageCreateEvent,
    guildMemberRemoveEvent,
];

export default botEvents;