//create an array of all the days in the month
function getDaysInMonth(year, month) {
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const totalDays = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day).toLocaleDateString("fr");
      totalDays.push(date);
    }
  
    return totalDays;
  }

  function filteredTasks (taskArray, dateOfTheDay) {

    var filteredTasks = [];
    for (var i = 0; i < taskArray.length; i++) {
      var convertedDate = Number(taskArray[i].startDate);
      var readableDate = new Date(convertedDate);
      var checkDate = readableDate.toLocaleDateString("fr");
  
      if (dateOfTheDay === checkDate) {
        filteredTasks.push(taskArray[i]);
      }
    };
  return filteredTasks;
  }
  

  export {
    getDaysInMonth,
    filteredTasks
  }