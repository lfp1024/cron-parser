const parser = require('../lib/parser');

function simpleTest() {

    try {
        // 按照系统时间解析，每日17:00，当前时间早于17:00，则当天执行，否则明天执行
        // 系统时区为 CST 时间，每天下午17:00 执行
        // 系统时区为 UTC 时间，每天下午17:00 执行，北京时间凌晨01:00 执行
        // 使用 cron-parser 时，需要根据系统时间来设置（如果系统时间为UTC，想北京时间第二天凌晨1点执行，则设置为17:00）
        var interval = parser.parseExpression('* * 17 * * *');
        console.log('Date: ', new Date().toLocaleString())
        console.log('Date: ', interval.next().toString()); 
        console.log('Date: ', interval.next().toString()); 

        console.log('Date: ', interval.prev().toString()); 
        console.log('Date: ', interval.prev().toString());
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

simpleTest();