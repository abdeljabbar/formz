Fz.Validation.registerValidator(
    'Romm\\Formz\\Validation\\Validator\\NumberLengthValidator',
    /**
     * @param {string}                   value
     * @param {Function}                 callback
     * @param {Object}                   states
     * @param {Formz.ResultInstance}     states.result
     * @param {Object}                   states.data
     * @param {string}                   states.validatorName
     * @param {object}                   states.configuration
     */
    function(value, callback, states) {
        if (value !== '') {
            if (isNaN(parseFloat(value)) || !isFinite(value)) {
                states['result'].addError({
                    name: 'notNumber',
                    message: states['configuration']['messages']['notNumber']
                });
            } else {
                if (value.length < states['configuration']['options']['minimum']
                    || value.length > states['configuration']['options']['maximum']
                ) {
                    states['result'].addError({
                        name: 'default',
                        message: states['configuration']['messages']['default'],
                        arguments: [
                            states['configuration']['options']['minimum'],
                            states['configuration']['options']['maximum']
                        ]
                    });
                }
            }
        }

        callback();
    }
);
