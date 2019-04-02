function defaultTask(cb) {
    cb();
    console.log("Running Default");
}

exports.defaultTask = defaultTask;