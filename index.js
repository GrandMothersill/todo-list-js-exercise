function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Empty Chemical Toilet", "Dump all the 💩 out of the chemical toilet");
const task2 = newTask("Chop Firewood", "Be manly. Do the log drivers waltz.");
const tasks = [task1, task2];

console.log(tasks);
