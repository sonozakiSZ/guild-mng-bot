import { Events } from "discord.js";
import { BotEvent } from "../services/discord";
import keyvs from "../services/keyvs";
import { __t } from "../services/locale";
import { logger } from "../services/logger";

export const guildCreateEvent: BotEvent = {
    name: Events.GuildCreate,
    execute: (guild) => {
        keyvs.setkeyv(guild.id);
        logger.info(__t("keyvs/set", { namespace: guild.id }));
    }
}

export default guildCreateEvent;