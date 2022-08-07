class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.timerId = null;
    };


    addClock(time, callback, id) {


        if (!id) {
            throw new Error('Error text');
        };

        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('id already exist')

        } else {
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: callback,
            });
        };
    };

    removeClock(id) {

        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);

        let finish = this.alarmCollection.length;

        return start > finish ? true : false;
    };

    getCurrentFormattedTime() {

        let nowTime = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });

        return nowTime;
    }


    start() {

        function checkClock(array, currunetTime) {
            array.forEach(item => {
                if (item.time == currunetTime) {
                    item.callback();
                }
            });
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => checkClock(this.alarmCollection, this.getCurrentFormattedTime()), 1000);
        }
    };

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };

    printAlarms() {
        this.alarmCollection.forEach(alarm => {

            console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`);

        });
    };

    clearAlarms() {

        this.stop();
        this.alarmCollection = [];
    };
};

function testCase() {
    console.log('start')
    const alarm = new AlarmClock();
  
    alarm.addClock('10:05', () => {
      console.log('Пора вставать.')
    }, 1);
  
    alarm.addClock('10:10', () => {
      console.log('Давай, вставай уже!');
      alarm.removeClock(2);
    }, 2);
  
    alarm.addClock('10:15', () => {
      console.log('Вставай, а то проспишь!');
      alarm.clearAlarms();
      alarm.printAlarm();
    }, 3)
    alarm.addClock('11:15', () => {console.log(`тест ошибки, id уже используется`)}, 2);
    try {
      alarm.addClock('11:15', () => {console.log(`тест ошибки, id будильника не передан`)});
    } catch (err) {
      console.error(err);
    }
    alarm.printAlarm();
    alarm.start();
  };
