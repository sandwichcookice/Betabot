import { Events } from "discord.js"
import { useAppStore } from "@/store/app" 

export const event = {
    name: Events.InteractionCreate
}

export const action = async(Interaction) => {
    if(!Interaction.isChatInputCommand()) return
    const appstore = useAppStore()
    const action = appstore.commantactionmap.get(Interaction.commandName)
    
    await action(Interaction)
}