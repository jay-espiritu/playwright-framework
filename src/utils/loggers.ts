import log4js from 'log4js'

export const logging = log4js

logging.configure({
    appenders: {
        multiFile: {
            type: 'multiFile',
            base: 'test-logs',
            property: 'categoryName',
            extension: '.log',
            layout: {
                type: 'pattern',
                pattern: '%d{hh:mm:ss} [%p] %c %f{1}:%l | %m%n',
            },
        },
    },
    categories: {
        /**
         * Change 'level' to desired level to be included in log files
         * ALL, MARK, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, OFF
         */
        default: { appenders: ['multiFile'], level: 'all', enableCallStack: true },
    },
})
