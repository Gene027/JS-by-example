
//import {PI, getCircumference, getArea} from "./math_util.js"; // bring in selected methods into scope
                                            // './math_util is a relative file path cos they are in same folder
import * as MathUtil from "./math_util.js";  //brings in everything in math_util lib into scope

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

//remember to include type = modules in html file