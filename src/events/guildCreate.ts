import { Events, Guild } from "discord.js";
import { BotEvent, botKeyvs } from "../services/discord";
import { __t } from "../services/locale";
import { logger } from "../services/logger";

export const guildCreateEvent: BotEvent = {
    name: Events.GuildCreate,
    execute: async (guild: Guild) => {
        logger.info(__t("log/bot/guildEntry", { guild: `${guild.name}(${guild.id})` }));
        botKeyvs.setkeyv(guild.id);
        logger.info(__t("log/keyvs/set", { namespace: guild.id }));
    }
};

export default guildCreateEvent;