module.exports = class DefaultScheduler {
    /**
     * Schedules a function to run after a set delay.
     *
     * @param {function} callbackFn The function to run
     * @param {number} delayMS      The number of milliseconds to wait
     * @returns  {function}         A cancellation function
     */
    schedule(callbackFn, delayMS) {
        const timeoutID = setTimeout(callbackFn, delayMS);
        return () => clearTimeout(timeoutID);
    }
};
