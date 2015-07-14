// A crack team of love scientists from OkEros (a hot new dating site) 
// have devised a way to represent dating profiles as rectangles on a 
// two-dimensional plane.

// They need help writing an algorithm to find the intersection of two 
// users' love rectangles. They suspect finding that intersection is 
// the key to a matching algorithm so powerful it will cause an immediate 
// acquisition by Google or Facebook or Obama or something.

// Write a function to find the rectangular intersection of two 
// given love rectangles.

// As with the example above, love rectangles are always "straight" 
// and never "diagonal." More rigorously: each side is parallel with 
// either the x-axis or the y-axis.

// They are defined as hash maps ↴ like this:

//   my_rectangle = {

//     # coordinates of bottom-left corner:
//     'x': 1,
//     'y': 5,

//     # width and height
//     'width': 10,
//     'height': 4,

// }
// Your output rectangle should use this format as well.

function find_rectangle_original(_rect1, _rect2) {
    var rect1 = {
        bottom_left: [_rect1.x, _rect1.y],
        top_right: [_rect1.x + _rect1.width, _rect1.y + _rect1.height]
    };

    var rect2 = {
        bottom_left: [_rect2.x, _rect2.y],
        top_right: [_rect2.x + _rect2.width, _rect2.y + _rect2.height]
    };

    var left_rect = (rect1.bottom_left[0] <= rect2.bottom_left[0]) ? rect1 : rect2;
    var right_rect = (rect1.top_right[0] >= rect2.top_right[1]) ? rect1 : rect2;
    var bottom_rect = (rect1.bottom_left[1] <= rect2.bottom_left[1]) ? rect1: rect2;
    var top_rect = (rect1.top_right[1] >= rect2.top_right[1]) ? rect1 : rect2;

    // one rectangle is inside the other rectangle
    if (left_rect === right_rect && bottom_rect === top_rect) {
        var contained_rect = left_rect === rect1 ? rect2 : rect1;
        return {
            x: contained_rect.bottom_left[0],
            y: contained_rect.bottom_left[1],
            width: contained_rect.top_right[0] - contained_rect.bottom_left[0],
            height: contained_rect.top_right[1] - contained_rect.bottom_left[1]
        }
    }


    // Check if rectangles don't intersect
        // either right_rect is to the right of leftmost left_rect
        // OR
        // bottom rect top point is below the bottom point of top rect  
    if (
        left_rect.top_right[0] < right_rect.bottom_left[0] || 
        bottom_rect.top_right[1] < top_rect.bottom_left[1]
    ) {
        return null;
    }
    else {
        var left_x = right_rect.bottom_left[0];
        var right_x = left_rect.top_right[0];

        var top_y = bottom_rect.top_right[1];
        var bottom_y = top_rect.bottom_left[1];

        return {
            x: left_x,
            y: bottom_y,
            width: right_x - left_x,
            height: top_y - bottom_y
        };
    }

    return {};
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// return an array that is a range or null
function find_overlap (range1, range2) {
    var first_range = range1[0] <= range2[0] ? range1: range2;
    var second_range = first_range === range1 ? range2 : range1;

    if (first_range[1] < second_range[0]) {
        return null;
    }
    else {
        return [
            second_range[0],
            Math.min(first_range[1], second_range[1])
        ];
    }
}

function find_rectangle(_rect1, _rect2) {
    var overlap_x = find_overlap(
        [_rect1.x, _rect1.x + _rect1.width],
        [_rect2.x, _rect2.x + _rect2.width]
    );

    var overlap_y = find_overlap(
        [_rect1.y, _rect1.y + _rect1.height],
        [_rect2.y, _rect2.y + _rect2.height]
    );

    if (overlap_x === null || overlap_y === null) {
        return null;
    }
    else {
        return {
            x: overlap_x[0],
            y: overlap_y[0],
            width: overlap_x[1] - overlap_x[0],
            height: overlap_y[1] - overlap_y[0]
        }
    }
}

module.exports = find_rectangle;
