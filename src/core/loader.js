import {REST,Routes,Collection} from 'discord.js'
import fg from 'fast-glob'
import {useAppStore} from "@/store/app"

const updateslashcommands = async(commands) => {
    const rest = new REST({version : 10}).setToken(process.env.TOKEN)
    const result = await rest.put(
        Routes.applicationCommands(
            process.env.APPLICATION_ID,
        ),
        {
            body: commands,
        }
    )
}

export const loadcommands = async() => {
   const appstore = useAppStore()
   const commands = []
   const action = new Collection()

   const files = await fg('./src/commands/**/index.js')

   for(const file of files){
    const cmd = await import(file)
    commands.push(cmd.command)
    action.set(cmd.command.name, cmd.action)
   }
   
   await updateslashcommands(commands)
   appstore.commantactionmap = action
}

export const loadevents = async() => {
    const appstore = useAppStore()
    const client = appstore.client
    const files = await fg('./src/events/**/index.js')

    for(const file of files){
        const eventsfile = await import(file)

        if(eventsfile.event.once)
        {
        client.once(eventsfile.event.name,eventsfile.action)
        }
        else
        {
        client.on(eventsfile.event.name,eventsfile.action)
        }
    }

}