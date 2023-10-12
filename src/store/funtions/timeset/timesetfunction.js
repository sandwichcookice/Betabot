import {useAppStore} from "@/store/app"

export function timeset(){

    const appstore = useAppStore()
    const currentTimeStamp = Date.now();
    const currentDate = new Date(currentTimeStamp);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const dayOfWeek = currentDate.getDay();

    appstore.year = year
    appstore.month = month
    appstore.day = day
    appstore.hours = hours
    appstore.minutes = minutes
    appstore.seconds = seconds
    appstore.dayOfWeek = dayOfWeek
    appstore.currentTimeStamp = currentTimeStamp

}
    