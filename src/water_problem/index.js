// given an input array that represents the height of a histogram,
// describe the volue of water that the given structure could hold
// 
// e.g.

/*
walls:
  X
  X  X
X X XX
X XXXX

agua:
  X
  X00X
X0X0XX
X0XXXX
 */

// [2,0,4,1,2,3] -> 5

function solve(heights) {
    if (heights.length < 3) return 0;

    // for every column in the middle of the histogram,
    // the amount of water that it can hold is going to be
    // equal to: the 
    // Min(Max to Right, Max to the Left) - height

    // calc min to the left
    var info = [];
    var max = heights[0];
    for (let i = 0; i < heights.length; i++) {
        info[i] = {};
        max = Math.max(max, heights[i]);
        info[i].leftMax = max;
    }

    // calc min going right
    max = heights[heights.length - 1];
    for (let i = heights.length - 1; i >= 0; i--) {
        max = Math.max(max, heights[i]);
        info[i].rightMax = max;
    }

    // run through final time and get the 
    var volume = 0;
    for (let i = 1; i < heights.length - 1; i++) {
        volume += Math.max(Math.min(info[i].leftMax, info[i].rightMax) - heights[i], 0);
    }
    return volume;
}

module.exports = solve;