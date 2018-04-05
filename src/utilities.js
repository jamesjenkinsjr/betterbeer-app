export const prettyDate = (ts) => {
    const d = new Date(ts)
    const date = d.toLocaleString();
    const tz = d.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    return date + ' ' + tz;
}