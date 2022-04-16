const { MessageEmbed } = require("discord.js");

module.exports = {

    description: 'Bottaki tüm komutları listeler',
    run: async (client, interaction) => {
        const gweep = new MessageEmbed().setTitle(client.user.username + " Kibar Uptime Yardım Menüsü")
        .addField("Uptime Et!","\`/ekle <link>\`",false)
        .addField("Sil!","\`/sil <link>\`",false)
        .addField("Listele!","\`/listele\`",false)
        .setThumbnail(client.user.avatarURL())
        .setFooter('KİBAR UPTİME');
        interaction.reply({embeds:[gweep]});
    } 
};
