import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandSubcommandBuilder, TextChannel } from "discord.js";
import keyvs, { KeyvKeys } from "../services/keyvs";
import { __t } from "../services/locale";
import { GetReplyEmbed, ReplyEmbedType } from "../services/utility";
import { Command } from "../types";

export const userInfocommand: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("user-info")
        .setDescription(__t("bot/command/user-info/description"))
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription(__t("bot/command/user-info/userOption/description"))
                .setRequired(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const user = interaction.options.getUser("user")!;
        const member = interaction.guild!.members.cache.get(user.id);
        if (!member) {
            const embed = GetReplyEmbed(__t("bot/command/notFoundUser", { user: user.toString() }), ReplyEmbedType.Warn);
            interaction.reply({ embeds: [embed] });
            return;
        }

        const profText = await (async () => {
            const profChannel: TextChannel = await keyvs.getValue(interaction.guildId!, KeyvKeys.ProfChannel);
            if (!profChannel) {
                return __t("bot/command/unsetProfChannel");
            }
            const channel = interaction.guild?.channels.cache.get(profChannel.id);
            if (!channel?.isTextBased()) {
                return __t("bot/command/notFoundProfChannel");
            }
            const prof = channel.messages.cache.find(message => message.author.id === member.id)?.content;
            return prof || __t("blank");
        })();

        const embeds = new Array<EmbedBuilder>();
        embeds.push(
            GetReplyEmbed(__t("bot/command/user-info/success"), ReplyEmbedType.Success)
        );
        embeds.push(
            new EmbedBuilder()
                .setTitle(member.user.tag)
                .setThumbnail(member.displayAvatarURL())
                .setColor(member.user.accentColor || member.displayColor)
                .addFields(
                    { name: __t("userID"), value: member.id, inline: true },
                    { name: __t("displayName"), value: member.user.displayName, inline: true },
                    { name: __t("nickname"), value: member.nickname || __t("unset"), inline: true },
                    { name: __t("accountCreationDate"), value: member.user.createdAt.toString(), inline: true },
                    { name: __t("serverJoinDate"), value: member.joinedAt?.toString()!, inline: true },
                    { name: __t("profile"), value: profText },
                    { name: __t("role"), value: member.roles.cache.map(role => role.toString()).join(", ") },
                    { name: __t("authority"), value: member.permissions.toArray().join(", ") },
                )
        );
        interaction.reply({ embeds: embeds });
    }
};

export default userInfocommand;