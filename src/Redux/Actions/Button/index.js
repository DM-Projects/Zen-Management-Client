const actionCreators = {
    alert: () => {
        return {
            type: "ALERT_USER",
            message: "Redux is working"
        }
    }
}

export {actionCreators}