import {Events} from 'discord.js'
import {activitie} from '@/main.js'

export const event = {
    name: Events.ClientReady,
    once: true,
}

export const action = (c) => {

    console.log(`Ready!${c.user.tag} now is online~~ 'w' `)
    activitie()

}