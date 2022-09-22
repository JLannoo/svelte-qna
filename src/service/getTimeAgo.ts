const timeAgo = new Intl.RelativeTimeFormat("es", {
    numeric: "auto",
})

export default function getTimeAgo(date: Date) {
    const diff = (new Date().getTime() - date.getTime());
    
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) {
        return timeAgo.format(-Math.round(diff / second), "second");
    }

    if (diff < hour) {
        return timeAgo.format(-Math.round(diff / (minute)), "minute");
    }

    if (diff < day) {
        return timeAgo.format(-Math.round(diff / (hour)), "hour");
    }

    if (diff < month) {
        return timeAgo.format(-Math.round(diff / (day)), "day");
    }

    if (diff < year) {
        return timeAgo.format(-Math.round(diff / (month)), "month");
    }

    return timeAgo.format(-Math.round(diff / (year)), "year");
}