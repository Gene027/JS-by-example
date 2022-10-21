export const PI = 3.14159; //export is more like using pub in rust
 
export function getCircumference (radius) {
    return  2 * PI * radius
}
export function getArea (radius) {
    return  PI * radius * radius;
}