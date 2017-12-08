const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const timecutting=n=>{
  //console.log(n);
  var date=new Date(n);
  var second = (date.getTime() - (new Date()).getTime())/1000;
  var hour=parseInt( second/3600);
  second=second-3600*hour;
  var minute = parseInt(second/60);
  second = parseInt(second-minute*60);
  hour = hour > 999 ? hour.toString() 
  : (hour > 99?"0"+hour.toString()
  :hour>9?"00"+hour.toString()
        : (hour > 0 ? "000" + hour.toString() : "0000"));

  minute = minute > 9 ? minute.toString() : "0" + minute.toString();
  second = second > 9 ? second.toString() : "0" + second.toString();

  //console.log(hour.toString() + "-"+minute.toString() + "-"+second.toString() );
  return {hour:hour,minute:minute,second:second};
}

module.exports = {
  formatTime: formatTime,
  timecutting: timecutting
}
