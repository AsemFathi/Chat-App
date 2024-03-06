export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    if (hours < 12)
        return `${hours}:${minutes} AM`;
    else
        return `${hours - 12}:${minutes} PM`;

}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}