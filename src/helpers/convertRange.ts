export default function converRange(number:number):number{
    if (number >= 10000) {
        return 0.9;
    }     
    return 1 - ((number / 1000));
}