function getFormattedDateWithHour() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensuring two digits for minutes
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Ensuring two digits for seconds

    // Return formatted date
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
const Time=getFormattedDateWithHour()
module.exports=Time
