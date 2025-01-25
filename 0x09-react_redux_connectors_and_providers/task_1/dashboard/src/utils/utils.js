export function getFullYear() {
    let date = new Date()
    return date.getFullYear()
}

export function getFooterCopy(isIndex) {
    if (!isIndex) {
        return 'ALX main dashboard'
    }
    return 'ALX'
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
