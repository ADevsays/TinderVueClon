import convertRange from './convertRange.ts';

interface transformData{
    axisX:number,
    axisY:number
}

export default function getTransform({axisX, axisY}:transformData){
    const porcentX3d = axisX * 0.2;
    const porcentYCalc = axisY * 0.5;
    const porcentY3d =  porcentYCalc < 0 ?  porcentYCalc : 0;
    const porcentAbs = Math.abs(porcentX3d);
    const porcentXScale = convertRange(porcentAbs);
    const transform = `
       translate3d(calc(0px + ${porcentX3d}%), ${porcentY3d}px, 0px)
       rotateZ(${porcentX3d / 3}deg)
       scale(${porcentXScale})`;
    return transform;
};