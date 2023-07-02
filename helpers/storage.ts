const LAST_STATUS_CHECK_KEY = "last_status_check"

export default {
  getSecondsSinceLastVersionCheck: () => (Date.now() - parseInt(localStorage.getItem(LAST_STATUS_CHECK_KEY) || "0")) / 1000,
  setLastStatusCheckTimestamp: (timestamp: number) => localStorage.setItem(LAST_STATUS_CHECK_KEY, timestamp.toString())
}
