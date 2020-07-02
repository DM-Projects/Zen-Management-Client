const actionCreators = {
    alert: () => {
        // alert("redux is working");
        return {
            type: "ALERT_USER",
            message: "Redux is working"
        }
    }
}

export {actionCreators}