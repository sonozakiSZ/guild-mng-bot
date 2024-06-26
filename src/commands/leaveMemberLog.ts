import { ChatInputCommandInteraction, Colors, DiscordAPIError, EmbedBuilder, PermissionFlagsBits, RESTJSONErrorCodes, SlashCommandBuilder } from "discord.js";
import { Command, ReplyEmbedType, getReplyEmbed } from "../services/discord";
import { discordBotKeyvs } from "../services/discordBotKeyvs";
import { __t } from "../services/locale";

export const LeaveMemberLogCommand: Command = {
    data: new SlashCommandBuilder()
        .setName("leave-member-log")
        .setDescription(__t("bot/command/leaveMemberLog/description"))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand(subcommand =>
            subcommand
                .setName("start")
                .setDescription(__t("bot/command/leaveMemberLog/start/description"))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("stop")
                .setDescription(__t("bot/command/leaveMemberLog/stop/description"))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("status")
                .setDescription(__t("bot/command/leaveMemberLog/status/description"))
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        switch (interaction.options.getSubcommand()) {
            case "start": {
                await discordBotKeyvs.setLeaveMemberLogChannelId(interaction.guildId!, interaction.channelId!);
                const embed = getReplyEmbed(__t("bot/command/leaveMemberLog/start/success"), ReplyEmbedType.Success);
                await interaction.reply({ embeds: [embed] });
                break;
            }
            case "stop": {
                await discordBotKeyvs.deleteLeaveMemberLogChannelId(interaction.guildId!);
                const embed = getReplyEmbed(__t("bot/command/leaveMemberLog/stop/success"), ReplyEmbedType.Success);
                await interaction.reply({ embeds: [embed] });
                break;
            }
            case "status": {
                await executeStatus(interaction);
                break;
            }
        }
    }
};

export const getStatusEmbed = async (interaction: ChatInputCommandInteraction) => {
    const leaveMemberLogChannelId = await discordBotKeyvs.getLeaveMemberLogChannelId(interaction.guildId!);
    const leaveMemberLogChannel = await (async () => {
        if (!leaveMemberLogChannelId) return undefined;
        return await interaction.guild?.channels.fetch(leaveMemberLogChannelId)
            .catch((reason: DiscordAPIError) => {
                if (reason.code === RESTJSONErrorCodes.UnknownChannel) {
                    return undefined;
                }
                throw reason;
            });
    })();
    const statusEmbed = new EmbedBuilder()
        .setTitle(__t("bot/leaveMemberLog"))
        .setColor(Colors.Blue)
        .setFields([
            { name: __t("leaveMemberLogSendChannel"), value: leaveMemberLogChannel?.toString() ?? __t("unset") },
        ])
    return statusEmbed;
};

const executeStatus = async (interaction: ChatInputCommandInteraction) => {
    const replyEmbed = getReplyEmbed(__t("bot/command/getStatus/success"), ReplyEmbedType.Success);
    await interaction.reply({ embeds: [replyEmbed] });
    const statusEmbed = await getStatusEmbed(interaction);
    await interaction.followUp({ embeds: [statusEmbed] });
};

export default LeaveMemberLogCommand;