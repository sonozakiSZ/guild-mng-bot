import { ChannelType, ChatInputCommandInteraction, DiscordAPIError, PermissionFlagsBits, RESTJSONErrorCodes, SlashCommandBuilder, TextChannel } from "discord.js";
import { Command, ReplyEmbedType, getReplyEmbed } from "../services/discord";
import { DiscordBotKeyvKeys, discordBotKeyvs } from "../services/discordBot";
import { __t } from "../services/locale";

export const cnfProfChannelCommand: Command = {
    data: new SlashCommandBuilder()
        .setName("cnf-prof-ch")
        .setDescription(__t("bot/command/cnf-prof-ch/description"))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
        .addSubcommand(subcommand =>
            subcommand
                .setName("set-ch")
                .setDescription(__t("bot/command/cnf-prof-ch/set-ch/description"))
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(__t("bot/command/cnf-prof-ch/set-ch/channelOption/description"))
                        .addChannelTypes(ChannelType.GuildText)
                        .setRequired(true)
                )
        ).addSubcommand(subcommand =>
            subcommand
                .setName("get-ch")
                .setDescription(__t("bot/command/cnf-prof-ch/get-ch/description"))
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        switch (interaction.options.getSubcommand()) {
            case "set-ch": {
                const channel = interaction.options.getChannel("channel") as TextChannel;
                discordBotKeyvs.setValue(interaction.guildId!, DiscordBotKeyvKeys.ProfChannel, channel);
                const embed = getReplyEmbed(__t("bot/command/cnf-prof-ch/set-ch/success", { channel: channel.toString() }), ReplyEmbedType.Success);
                await interaction.reply({ embeds: [embed] });
                break;
            }
            case "get-ch": {
                const profChannel = await discordBotKeyvs.getValue(interaction.guildId!, DiscordBotKeyvKeys.ProfChannel) as TextChannel | undefined;
                if (!profChannel) {
                    const embed = getReplyEmbed(__t("bot/command/unsetProfChannel"), ReplyEmbedType.Warn);
                    await interaction.reply({ embeds: [embed] });
                    return;
                }
                const channel = await interaction.guild?.channels.fetch(profChannel.id)
                    .catch((reason: DiscordAPIError) => {
                        if (reason.code === RESTJSONErrorCodes.UnknownChannel) {
                            return undefined;
                        }
                        throw reason;
                    });
                if (!channel) {
                    const embed = getReplyEmbed(__t("bot/command/notFoundProfChannel"), ReplyEmbedType.Warn);
                    await interaction.reply({ embeds: [embed] });
                    return;
                }
                const embed = getReplyEmbed(__t("bot/command/cnf-prof-ch/get-ch/success", { channel: channel.toString() }), ReplyEmbedType.Success);
                await interaction.reply({ embeds: [embed] });
                break;
            }
        }
    }
};

export default cnfProfChannelCommand;