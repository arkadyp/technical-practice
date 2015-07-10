// Your company built an in-house calendar tool called HiCal. You want to add a 
// feature to see the times in a day when everyone is available.
// 
// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as a tuple of integers (start_time, end_time). 
// These integers represent the number of 30-minute blocks past 9:00am.

// For example:

//   (2, 3) # meeting from 10:00 – 10:30 am
// (6, 9) # meeting from 12:00 – 1:30 pm
// Write a function condense_meeting_times() that takes an array of 
// meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
// your function would return:

//   [(0, 1), (3, 8), (9, 12)]
// Do not assume the meetings are in order. The meeting times are
//  coming from multiple teams.

// In this case the possibilities for start_time and end_time are 
// bounded by the number of 30-minute slots in a day. But soon you 
// plan to refactor HiCal to store times as Unix timestamps (which 
// are big numbers). Write something that's efficient even when we 
// can't put a nice upper bound on the numbers representing our time ranges.

function condense_meeting_times(arr) {
    if (!arr || arr.length < 1) {
        return [];
    }

    // Sort meeting times in acsending order
    var condensed_times = arr.slice();
    condensed_times.sort((a, b) => a[0] > b[0]);

    // Since the meeting times are sorted in ascending order,
    // the next start time can either be between or after the
    // meeting time
    var index = 1;
    while (index < condensed_times.length) {
        let prev_index = index - 1;
        let prev_start_time = condensed_times[prev_index][0];
        let prev_end_time = condensed_times[prev_index][1];
        let next_start_time = condensed_times[index][0]; 
        let next_end_time = condensed_times[index][1];

        if (next_start_time > prev_end_time) {
            index++;
        }
        else if (next_start_time === prev_end_time) {
            condensed_times[prev_index][1] = next_end_time;
            condensed_times.splice(index, 1);
        }
        else {
            condensed_times[prev_index][1] = Math.max(prev_end_time, next_end_time);
            condensed_times.splice(index, 1);
        }
    }

    return condensed_times;
}

module.exports = condense_meeting_times;
